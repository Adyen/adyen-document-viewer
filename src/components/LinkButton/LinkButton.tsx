import '../Link/Link.scss';

interface LinkButtonProps {
  onClick?: () => void;
  label?: string;
}

const LinkButton = ({ onClick, label }: LinkButtonProps) => (
  <button className="adv-link" type="button" onClick={onClick} title={label}>
    {label}
  </button>
);

export default LinkButton;
