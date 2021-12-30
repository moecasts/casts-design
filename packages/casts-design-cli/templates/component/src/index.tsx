import styles from './styles.module.css';

interface Props {
  text: string;
}

export type TestProps = {
  a: string;
};

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};
