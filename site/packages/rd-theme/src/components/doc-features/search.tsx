import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Button } from '@casts/button';
import { BaseComponentProps, noop, reduce, useDebounceFn } from '@casts/common';
import { Dialog, DialogProps } from '@casts/dialog';
import { Empty } from '@casts/empty';
import { ArticleLine, Hashtag, Paragraph, SearchLine } from '@casts/icons';
import { Input, InputProps } from '@casts/input';
import { CircularProgress } from '@casts/progress';
import { MatchedResultItem, useSearch } from '@casts/rd-vite/client';
import { Link, useNavigate } from 'react-router-dom';

import { getPrefixCls } from '../../common';

import '../styles/search.scss';

type SearchContextValue = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchContext = createContext<SearchContextValue>({
  setOpen: noop,
});

const useSearchContext = () => useContext(SearchContext);

type SearchResultItemProps = BaseComponentProps & {
  data: MatchedResultItem;
};

const SearchResultItem: FC<SearchResultItemProps> = (props) => {
  const { data } = props;

  const prefixCls = getPrefixCls('search-item');

  const navigate = useNavigate();

  const { setOpen } = useSearchContext();

  const handleClick = () => {
    navigate(data.route);
    setOpen(false);
  };

  const renderIcon = () => {
    if (data.type === 'title') {
      return <ArticleLine />;
    }

    if (data.type === 'header') {
      return <Hashtag />;
    }

    if (data.type === 'content') {
      return <Paragraph />;
    }

    return null;
  };

  const renderContent = () => {
    let offset = 0;
    const statement = reduce(
      data.highlightInfoList,
      (acc, item) => {
        const start = item.start + offset;
        const end = start + item.length;
        const before = acc.slice(0, start);
        const after = acc.slice(end);
        const keyword = acc.slice(start, end);
        const highlight = `<strong>${keyword}</strong>`;
        offset += highlight.length - keyword.length;

        return `${before}${highlight}${after}`;
      },
      data.statement,
    );

    if (data.type === 'title') {
      return (
        <div
          className={`${prefixCls}-title`}
          dangerouslySetInnerHTML={{ __html: statement }}
        ></div>
      );
    }

    if (data.type === 'header') {
      const text = [data.title, statement].join(' > ');

      return (
        <div
          className={`${prefixCls}-title`}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      );
    }

    if (data.type === 'content') {
      return (
        <>
          <div
            className={`${prefixCls}-title`}
            dangerouslySetInnerHTML={{ __html: statement }}
          ></div>
          <div className={`${prefixCls}-location`}>{data.title}</div>
        </>
      );
    }

    return null;
  };

  return (
    <Link to={data.route} onClick={handleClick} className={prefixCls}>
      <div className={`${prefixCls}-icon`}>{renderIcon()}</div>

      <div className={`${prefixCls}-content`}>{renderContent()}</div>
    </Link>
  );
};

const SearchResult = () => {
  const { search } = useSearch();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MatchedResultItem[]>([]);
  const [query, setQuery] = useState('');

  const debounceSearch = useDebounceFn(
    (query: string) => {
      try {
        const result = search(query);
        setResult(result);
      } finally {
        setLoading(false);
      }
    },
    {
      wait: 300,
    },
  );

  const handleChange: InputProps['onChange'] = (value) => {
    setLoading(true);
    setQuery(value as string);
    debounceSearch.run(value as string);
  };

  const prefixCls = getPrefixCls('search');

  return (
    <div className={`${prefixCls}`}>
      <Input
        prefix={<SearchLine />}
        size="large"
        onChange={handleChange}
        clearable
      />

      {query && (
        <div className={`${prefixCls}-result`}>
          {loading && <CircularProgress style={{ overflow: 'hidden' }} />}

          {!loading && (
            <>
              {!result.length && <Empty />}

              {!!result.length &&
                result.map((item) => (
                  <SearchResultItem key={item.id} data={item} />
                ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export const Search = () => {
  const [open, setOpen] = useState(false);

  const handleSearchClick = () => {
    setOpen(true);
  };

  const handleOpenChange: DialogProps['onOpenChange'] = (open) => {
    setOpen(open);
  };

  return (
    <SearchContext.Provider
      value={{
        setOpen,
      }}
    >
      <Button
        icon={<SearchLine />}
        variant="link"
        theme="neutral"
        onClick={handleSearchClick}
      ></Button>
      <Dialog
        open={open}
        header={null}
        footer={null}
        centered={false}
        onOpenChange={handleOpenChange}
        dialogClassName={`${getPrefixCls('search-dialog')}`}
      >
        <SearchResult />
      </Dialog>
    </SearchContext.Provider>
  );
};
