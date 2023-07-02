import Card from "./card";
import './App.css'
import { data } from "./data";
export const App = () => {
  const renderData = data.map((item) => {
    return (
      <Card
        key={item.id}
        image={item.image}
        dataName={item.dataName}
        title={item.title}
        link={item.link}
      />
    );
  });
  return <div className="main-container">{renderData}</div>;
};
