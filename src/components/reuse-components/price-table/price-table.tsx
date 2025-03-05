import { Card } from "@mui/material";
import { constant } from "../../../constant";

const PriceTable: React.FC<{
  subTotal: number;
  taxPrice: number;
  grandTotal: number;
}> = ({ subTotal, taxPrice, grandTotal }): JSX.Element => {
  return (
    <Card
      sx={{
        padding: 2,
        width: "fit-content",
        marginLeft: "auto",
        background: "var(--silver-color)",
      }}
    >
      <table>
        <tbody>
          <tr>
            <th>{constant.subTotal}</th>
            <td>
              {constant.rupees} {subTotal}
            </td>
          </tr>
          <tr>
            <th>{constant.tax}</th>
            <td>
              {constant.rupees} {taxPrice}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <hr style={{ border: "1px solid black", margin: "5px 0" }} />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>{constant.grandTotal}</th>
            <td>
              <b>
                {constant.rupees} {grandTotal}
              </b>
            </td>
          </tr>
        </tfoot>
      </table>
    </Card>
  );
};
export default PriceTable;
