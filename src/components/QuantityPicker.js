import styles from "./QuantityPicker.module.css";

export default function QuantityPicker(props) {
  return (
    <div className={styles.row}>
      <div className={styles.infoWrapper}>
        <img className="icon" alt="icon" src={props.logo} />
        <span>{props.title}</span>
      </div>
      <div>
        <button
          className={styles.remove}
          disabled={props.disableRemove}
          onClick={props.removeFunction}
        >
          -
        </button>
        <span className={styles.count}>{props.count}</span>
        <button
          className={styles.add}
          disabled={props.disableAdd}
          onClick={props.addFunction}
        >
          +
        </button>
      </div>
    </div>
  );
}
