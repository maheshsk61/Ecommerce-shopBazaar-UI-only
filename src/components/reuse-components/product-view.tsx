import {
  Box,
  Card,
  Grid2,
  Typography,
  Skeleton,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { IProducts, IProductsData, ISearchQuery } from "../../interface";
import { Link } from "react-router-dom";
import { constant } from "../../constant";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useEffect, useState } from "react";

const ProductView: React.FC<IProducts> = ({
  products,
  loading,
}): JSX.Element => {
  const searchQuery: ISearchQuery = useSelector(
    (state: RootState) => state.search
  );
  const query: string = searchQuery.query?.toLowerCase() ?? "";
  const [showProductsAfterSorting, setShowProductsAfterSorting] = useState<
    IProductsData[]
  >([]);
  const [sortPrice, setSortPrice] = useState("");

  useEffect(() => {
    const filteredProducts: IProductsData[] = (products ?? []).filter(
      (product) => {
        return product.name?.toLowerCase().includes(query);
      }
    );
    // console.log(`filteredProducts ${JSON.stringify(filteredProducts)}`);

    let sortedFilteredProducts = [...filteredProducts];
    if (sortPrice === "Low to High") {
      sortedFilteredProducts.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    } else if (sortPrice === "High to Low") {
      sortedFilteredProducts.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }

    const notFilteredProducts: IProductsData[] = (products ?? []).filter(
      (product) => {
        return !product.name?.toLowerCase().includes(query);
      }
    );
    // console.log(`notFilteredProducts ${JSON.stringify(notFilteredProducts)}`);

    const finalProducts: IProductsData[] = [
      ...sortedFilteredProducts,
      ...notFilteredProducts,
    ];
    //console.log(`sortedFilteredProducts ${JSON.stringify(sortedFilteredProducts)}`);

    setShowProductsAfterSorting(finalProducts);
  }, [query, sortPrice, products]);

  const handleSortingPrice = (e: SelectChangeEvent) => {
    const selectedValue = e.target.value;
    setSortPrice(selectedValue);
  };

  return (
    <Box sx={{ padding: 5, marginTop: { xs: 0 } }}>
      <Box sx={{textAlign:'center', margin:'0 auto 10px'}}>
        <Select value={sortPrice} onChange={handleSortingPrice} displayEmpty>
          <MenuItem value="" disabled>
            Sort By
          </MenuItem>
          <MenuItem value={"Low to High"}>Low to High</MenuItem>
          <MenuItem value={"High to Low"}>High to Low</MenuItem>
        </Select>
      </Box>
      <Grid2 container columnSpacing={2} rowSpacing={2} justifyContent="center">
        {loading
          ? Array.from({ length: 20 }, (_, index) => {
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
                      <Skeleton
                        variant="rectangular"
                        width={200}
                        height={200}
                      />
                    </Box>
                  </Card>
                </Grid2>
              );
            })
          : showProductsAfterSorting &&
            showProductsAfterSorting.length > 0 &&
            showProductsAfterSorting.map((product: IProductsData, index) => {
              return (
                <Grid2
                  sx={{
                    marginBottom:
                      index === showProductsAfterSorting.length - 1 ? 0 : 1,
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
                    to={`/${encodeURIComponent(product.name ?? "")}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card sx={{ width: "250px", padding: 2 }}>
                      <img
                        src={product.img}
                        alt={product.name}
                        style={{
                          width: 200,
                          height: 200,
                          margin: "0 auto",
                          objectFit: "cover",
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          display: "-webkit-box", // Use a flexible box layout
                          WebkitBoxOrient: "vertical", // Set the box to be oriented vertically
                          overflow: "hidden", // Hide overflow text
                          WebkitLineClamp: 3, // Limit to 3 lines
                          textOverflow: "ellipsis", // Add ellipsis when the text overflows
                          maxWidth: 200, // Set a max width to apply the ellipsis
                          textAlign: "center", // Align text in the center if needed
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                        variant="h6"
                      >
                        {constant.rupees}
                        {product.price}
                      </Typography>
                    </Card>
                  </Link>
                </Grid2>
              );
            })}
      </Grid2>
    </Box>
  );
};
export default ProductView;
