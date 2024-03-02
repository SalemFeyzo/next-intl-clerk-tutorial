interface ICode {
  children: React.ReactNode;
  className?: string;
}

export default function Code(props: ICode) {
  return <code className={props.className}>{props.children}</code>;
}
