import { useLocation } from "react-router";
import { useRef } from "react";
export const PayOnline = () => {
  const { state } = useLocation();
  const submitBtn = useRef(null);
  setTimeout(() => {
    submitBtn.current.click();
  }, 3000);
  const data = {
    ORDER_ID: state.orderID,
    CUST_ID: state.user_id,
    INDUSRTY_TYPE_ID: "Retail",
    CHANNEL_ID: "WEB",
    TXN_AMOUNT: state.cartTotal,
  };
  console.log(data);
  return (
    <div>
      Please wait you will redirect with in 3 sec
      <div>
        <form
          action="https://greenlandorganicfarms.com/api/User/paytm/pgRedirect.php"
          method="post"
        >
          {Object.keys(data).map((eachItem) => {
            return (
              <input type="hidden" value={data[eachItem]} name={eachItem} />
            );
          })}
          <input
            className="displayNone"
            ref={submitBtn}
            type="submit"
            value="submit"
          ></input>{" "}
        </form>
      </div>
    </div>
  );
};
