import { useEffect } from "react";
import axios from "../../api";
import { Box, Card, Typography, Skeleton, Grid2 } from "@mui/material";
import "./product-list.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { setList } from "../../Redux/slices/product-lists";
import { setLoading } from "../../Redux/slices/loading";
import {
  ILoading,
  IProduct,
  IProductList,
  IProductsData,
  ISearchQuery,
} from "../../interface";
import { constant } from "../../constant";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";

const ProductList: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const lists: IProductList = useSelector(
    (state: RootState) => state.productLists
  );
  //console.log(`lists ${lists}`);
  const loading: ILoading = useSelector((state: RootState) => state.loading);
  //console.log(`loading ${JSON.stringify(loading)}`);
  const searchQuery: ISearchQuery = useSelector(
    (state: RootState) => state.search
  );
  //console.log(`searchQuery ${searchQuery.query}`)
  const query: string = searchQuery.query?.toLowerCase() ?? "";
  const filteredProducts: IProductsData[] = (lists.list ?? []).filter(
    (product) => {
      return product.name?.toLowerCase().includes(query);
    }
  );
  //console.log(`filteredProducts ${filteredProducts}`)
  const notFilteredProducts: IProductsData[] = (lists.list ?? []).filter(
    (product) => {
      return !product.name?.toLowerCase().includes(query);
    }
  );
  // console.log(`notFilteredProducts ${JSON.stringify(notFilteredProducts)}`);
  const sortedFilteredProducts: IProductsData[] = [
    ...filteredProducts,
    ...notFilteredProducts,
  ];
  //console.log(`sortedFilteredProducts ${JSON.stringify(sortedFilteredProducts)}`);

  useEffect(() => {
    const getProductLists = async () => {
      try {
        const response = await axios.get(`/productLists`)
        setTimeout(() => {
          dispatch(setLoading(true));
          dispatch(setList(response.data.productLists));
          dispatch(setLoading(false));
        }, 1000);
      } catch (error) {
        
        return Promise.reject(error);
      } finally {
        dispatch(setLoading(true));
      }
    };
    getProductLists();
  }, [dispatch]);

  return (
    <Box sx={{ padding: 5, marginTop: { xs: 0 } }}>
      <Grid2 container columnSpacing={2} rowSpacing={2} justifyContent="center">
        {loading.loading ? (
          Array.from({ length: lists.length || 21 }, (_, index) => {
            return (
              <Grid2
                sx={{
                  gridColumn: {
                    xs: "span 12", // Full width on extra-small screens
                    sm: "span 6", // Half width on small screens
                    md: "span 4", // One-third width on medium screens
                    lg: "span 4", // Same as md
                    xl: "span 3", // One-fourth width on extra-large screens
                  },
                }}
                key={index}
              >
                <Card
                  sx={{
                    width: "250px",
                    padding: 2,
                    background: "var(--skeleton-color)",
                  }}
                >
                  <Box className="d-flex justify-content-center ">
                    <Skeleton variant="rectangular" width={200} height={200} />
                  </Box>
                </Card>
              </Grid2>
            );
          })
        ) : sortedFilteredProducts && sortedFilteredProducts.length > 0 ? (
          sortedFilteredProducts.map((product: IProduct, index) => {
            return (
              <Grid2
                sx={{
                  marginBottom:
                    index === sortedFilteredProducts.length - 1 ? 0 : 1,
                  gridColumn: {
                    xs: "span 12",
                    sm: "span 6",
                    md: "span 4",
                    lg: "span 4",
                    xl: "span 3",
                  },
                }}
                key={product.id}
              >
                <Link
                  to={`/${product.name}s`}
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ width: "250px", padding: 2 }} className="card">
                    <img
                      src={`${product.imageUrl}`}
                      alt={product.name}
                      style={{
                        width: 200,
                        height: 200,
                        margin: "0 auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                      {product.name}
                    </Typography>
                  </Card>
                </Link>
              </Grid2>
            );
          })
        ) : (
          <Box className="d-flex justify-content-center w-100">
            <Typography variant="h5">
              <i>{constant.noProductsFound}</i>
              <SentimentVeryDissatisfiedIcon />
            </Typography>
          </Box>
        )}
      </Grid2>
    </Box>
  );
};
export default ProductList;
