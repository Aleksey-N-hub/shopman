import React from "react";
import Table from "react-bootstrap/Table";

export default function delivery() {
  const getDate = (deliveryTimeMin, deliveryTimeMax) => {
    let d = new Date();
    let m = new Date();
    let day = d.getDate();
    d.setDate(day + deliveryTimeMin);
    m.setDate(day + deliveryTimeMax);
    return `${d.toDateString()} - ${m.toDateString()}`;
  };

  return (
    <div className="description-field">
      <strong>
        Currently all orders within the UK are being prepared and dispatched as
        normal.{" "}
      </strong>{" "}
      There are no known delays for delivery within the UK. International
      customers may experience some small delays. We kindly ask for your
      understanding and patience during this difficult time. <br /> <br />
      All orders are sent with tracked priority delivery. UK orders are sent by
      Royal Mail, while International orders are processed by Royal Mail or
      Hermes depending on your country. <br />
      <br /> Orders placed before 4pm Monday to Friday are processed and
      dispatched the same day.
      <br />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <td colSpan="4" className="tab-head">
              International Delivery
            </td>
          </tr>
          <tr>
            <th>Delivery Method </th>
            <th>Delivery Timescale</th>
            <th>Delivery Price</th>
            <th>Estimated Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Australia</td>
            <td>7-14 business days</td>
            <td>£9.99</td>
            <td>{getDate(7, 14)}</td>
          </tr>
          <tr>
            <td>Canada</td>
            <td>7-14 business days</td>
            <td>£7.99</td>
            <td>{getDate(7, 14)}</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>7-14 business days</td>
            <td>£7.99</td>
            <td>{getDate(7, 14)}</td>
          </tr>
          <tr>
            <td>USA</td>
            <td>3-8 business days</td>
            <td>£7.99</td>
            <td>{getDate(3, 8)}</td>
          </tr>
          <tr>
            <td>France</td>
            <td>5-10 business days</td>
            <td>£1.99</td>
            <td>{getDate(5, 10)}</td>
          </tr>
          <tr>
            <td>Germany</td>
            <td>5-10 business days</td>
            <td>£0.99</td>
            <td>{getDate(5, 10)}</td>
          </tr>
          <tr>
            <td>Rest of World</td>
            <td>7-14 business days</td>
            <td>£7.99</td>
            <td>{getDate(7, 14)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
