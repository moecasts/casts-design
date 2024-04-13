import { FC } from 'react';
import { useMemo } from 'react';
import { arrayInsertInterval, BaseComponentProps, map } from '@casts/common';
import {
  ApiDeclaration,
  ApiDeclarations,
  ApisDeclarations,
} from '@casts/rd-vite/types';
import { Column, Table } from '@casts/table';
import { Text } from '@casts/typography';

export type ApiProps = BaseComponentProps & {
  apis: ApisDeclarations;
};

export const Api: FC<ApiProps> = (props) => {
  const { apis } = props;

  const columns = useMemo<Column[]>(
    () => [
      {
        key: 'property',
        title: 'Property',
      },
      {
        key: 'description',
        title: 'Description',
      },
      {
        key: 'type',
        title: 'Type',
        cell: ({ cell }) => {
          const node = cell
            .getValue()
            .split(/\s*\|\s*/g)
            .map((item: string) => {
              const text = item.replace(/^(['"])(.*)\1$/, '$2');
              return (
                <Text code key={text}>
                  {text}
                </Text>
              );
            });

          return arrayInsertInterval(node, ' | ', 1);
        },
      },
      {
        key: 'default',
        title: 'Default',
        cell: ({ cell }) => {
          const text = cell.getValue();
          if (!text) {
            return '-';
          }

          return <Text code>{text}</Text>;
        },
      },
      {
        key: 'required',
        title: 'Required',
      },
    ],
    [],
  );

  const renderApis = (apis: ApisDeclarations) => {
    return map(
      map(apis, (declarations: ApiDeclarations, name: string) => {
        const getDeclarationType = (type: ApiDeclaration['type']) => {
          if (type.name !== 'enum') {
            return type.name;
          }

          return type.raw;
        };

        const getData = (declarations: ApiDeclarations) =>
          declarations.map((declaration) => ({
            property: declaration.identifier,
            description: declaration.description || '',
            type: getDeclarationType(declaration.type),
            default: declaration.default,
            required: declaration.required ? 'Y' : 'N',
          }));

        return (
          <div key={name}>
            <h3>{name}</h3>
            <Table
              columns={columns}
              data={getData(declarations)}
              bordered={true}
              rowRound={false}
            />
          </div>
        );
      }),
    );
  };

  return <div>{renderApis(apis)}</div>;
};
