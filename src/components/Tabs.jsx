import React, {useState} from "react";
import Button from "react-bootstrap/Button";

const Tabs = (props) => {
  const [tab, setTab] = useState(0);
  const {tabs} = props;
  const content = tabs[tab].content;
  return (
    <div className="d-flex align-items-center justify-content-center text-center">
      <div>
        {tabs.map((tab, i) => (
          <Button
            className="m-2"
            variant="dark"
            size="lg"
            key={i}
            onClick={(e) => setTab(i)}
          >
            {tab.label}
          </Button>
        ))}
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Tabs;
