// eslint-disable-next-line no-unused-vars
import currency from "currency.js";

const money = (money) => {
    /* console.log(money) */
    if (money) {
        return currency(money, { separator: '.', decimal: ",",precision:0}).format()
    }

    return false
}

export default money