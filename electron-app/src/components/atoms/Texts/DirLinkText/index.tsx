import styles from "./index.module.scss";

interface props {
  /** Text to display */
  text: string;
  /** Size of the text */
  size: "small" | "medium" | "large";
  /** Function to execute when text is clicked */
  onClick(): void;
}

const DirLinkText: React.FC<props> = ({
  text = "link text",
  size = "small",
  onClick = () => {},
}) => {
  const getFontSize = () => {
    if (size === "small") return "14px";
    if (size === "medium") return "16px";
    if (size === "large") return "18px";
  };
  return (
    <span
      role="link"
      onClick={onClick}
      style={{ fontSize: getFontSize() }}
      className={styles.link}
    >
      {text}
    </span>
  );
};

export default DirLinkText;
