import _ from "lodash";

export function filterProduct(products, count) {
  //   const productNumber = _.range(1, count + 1);

  const startIndex = 0;
  const filter = _(products)
    .slice(startIndex)
    .take(count * 18)
    .value();

  return filter;
}
