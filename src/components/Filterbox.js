import Form from "react-bootstrap/Form";

const Filterbox = ({ category, label, selected, setSelected }) => {
  return (
    <Form.Check
      type="checkbox"
      label={label}
      onChange={(e) =>
        setSelected({
          ...selected,
          [e.target.value]: e.target.checked,
        })
      }
      value={category}
      checked={selected[category]}
    />
  );
};

export default Filterbox;
