import {
  createElement,
  FC,
  isValidElement,
  lazy,
  ReactNode,
  Suspense,
  useEffect,
  useState,
} from 'react';
import { Button } from '@casts/button';
import { Code as BaseCode } from '@casts/code';
import { BaseComponentProps, isEmpty, zipObject } from '@casts/common';
import { CodeSSlashLine } from '@casts/icons';
import { CircularProgress } from '@casts/progress';
import { TabPane, Tabs } from '@casts/tabs';

import { getPrefixCls } from '../../common';

import './code.scss';

export type CodeProps = BaseComponentProps & {
  src: string;
  importSourcesString?: string;
  codeSources?: Record<string, any>;
  children: ReactNode;
};

export const Code: FC<CodeProps> = (props) => {
  const { codeSources } = props;

  const prefixCls = getPrefixCls('code-block');

  /* --------------------------------- get imported source codes ---------------------------------------- */
  const [codes, setCodes] = useState({});

  const initCodes = async (
    codeSources: Record<string, () => Promise<{ default: string }>>,
  ) => {
    const contents = await Promise.all(
      Object.values(codeSources).map(
        async (codeDynamicImport) => (await codeDynamicImport()).default,
      ),
    );

    const codes = zipObject(Object.keys(codeSources), contents);
    setCodes(codes);
  };

  useEffect(() => {
    if (!codeSources) {
      return;
    }
    initCodes(codeSources);
  }, [codeSources]);

  const initComponent = (component: ReactNode) => {
    if (!component || isValidElement(component)) {
      return component;
    }

    if (typeof component === 'function') {
      if (String(component).includes('import(')) {
        return createElement(lazy(component));
      }

      return createElement(component);
    }

    return component;
  };

  const [component] = useState<ReactNode>(() => initComponent(props.children));

  const [codeVisible, setCodeVisible] = useState(false);

  // const { create } = useCodeSandbox();
  //
  // useEffect(() => {
  //   console.log('debug1 props', props);
  //   create();
  // }, []);

  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-previewer`}>
        <Suspense fallback={<CircularProgress size={32} />}>
          {component}
        </Suspense>
      </div>
      <div className={`${prefixCls}-toolbar`}>
        <div className={`${prefixCls}-toolbar-left`}>
          {/** left */}
          {/** <ExternalLink /> */}
        </div>
        <div className={`${prefixCls}-toolbar-right`}>
          <Button
            theme="neutral"
            variant="text"
            icon={<CodeSSlashLine />}
            onClick={() => setCodeVisible(!codeVisible)}
          />
        </div>
      </div>
      {codeVisible && !isEmpty(codes) && (
        <div className={`${prefixCls}-source`}>
          <Tabs size="small" defaultValue={Object.keys(codes || {})[0]}>
            {Object.entries(codes || {}).map(([name, code]) => (
              <TabPane label={name} value={name} key={name}>
                <div className={`${prefixCls}-source-item`} key={name}>
                  <BaseCode source={code} />
                </div>
              </TabPane>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
};