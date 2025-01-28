import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { productLists } from "./mockdata/product-lists";
import { products } from "./mockdata/products";
const mock = new MockAdapter(axios);
mock.onGet("/productLists").reply(200, { productLists });
mock.onGet("/products").reply(200, { products });
let mockUsers: any = [];
mock.onPost("/register").reply((config) => {
  const requestData = JSON.parse(config.data);
  //console.log("Mock received payload:", requestData);
  mockUsers.push(requestData);
  return [
    201,
    {
      message: "User registered successfully!",
      user: requestData,
    },
  ];
});
mock.onPost("/userValidate").reply((config) => {
  const { email, password } = JSON.parse(config.data);
  const user = mockUsers.find(
    (u: any) => u.email === email && u.password === password
  );
  if (user) {
    return [200, { message: "User validated successfully", user }];
  } else {
    return [401, { message: "Invalid email or password" }];
  }
});
export default axios;
