import './styles.scss';

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>;
};
