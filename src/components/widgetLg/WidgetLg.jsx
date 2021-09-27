import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="/user.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Chetan Paliwal</span>
          </td>
          <td className="widgetLgDate">1 Sept 2021</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="./user.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Yashasvi Asthana</span>
          </td>
          <td className="widgetLgDate">2 Sept 2021</td>
          <td className="widgetLgAmount">$200.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}
