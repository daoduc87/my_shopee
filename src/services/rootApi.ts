import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../redux/store";

interface User {
  message: string;
  data: Data;
}

interface Data {
  _id: string;
  roles: string[];
  email: string;
  createdAt: string;
  updatedAt: string;
  address: string;
  date_of_birth: string;
  name: string;
  phone: string;
  avatar: string;
}
const baseQuery = fetchBaseQuery({
  baseUrl: "https://api-ecom.duthanhduoc.com",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.access_token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Purchases"],
  endpoints: (builder) => {
    return {
      register: builder.mutation({
        query: ({ name, email, password }) => {
          return {
            url: "/register",
            body: { name, email, password },
            method: "POST",
          };
        },
      }),
      login: builder.mutation({
        query: ({ email, password }) => {
          return {
            url: "/login",
            body: { email, password },
            method: "POST",
          };
        },
      }),
      getMe: builder.query<User, void>({
        query: () => {
          return "/me";
        },
      }),
      getCategory: builder.query<any, void>({
        query: () => {
          return "/categories";
        },
      }),
      getProducts: builder.query({
        query: ({
          page,
          limit,
          order,
          sort_by,
          category,
          exclude,
          rating_filter,
          price_max,
          price_min,
          name,
        }) => {
          return {
            url: "/products",
            params: {
              page,
              limit,
              order,
              sort_by,
              category,
              exclude,
              rating_filter,
              price_max,
              price_min,
              name,
            },
          };
        },
      }),
      getProductDetail: builder.query({
        query: ({ productId }) => {
          return `/products/${productId}`;
        },
      }),
      addToCart: builder.mutation({
        query: ({ product_id, buy_count }) => {
          return {
            url: "/purchases/add-to-cart",
            body: { product_id, buy_count },
            method: "POST",
          };
        },
      }),
      readPurchases: builder.query({
        query: ({ status }) => {
          return {
            url: "/purchases",
            params: { status },
          };
        },
        providesTags: ["Purchases"],
      }),
      updatePurchases: builder.mutation({
        query: ({ product_id, buy_count }) => {
          return {
            url: "/purchases/update-purchase",
            body: { product_id, buy_count },
            method: "PUT",
          };
        },
      }),
      deletePurchases: builder.mutation({
        query: (purchaseIds) => {
          return {
            url: "/purchases",
            body: purchaseIds,
            method: "DELETE",
          };
        },
      }),
      buyProducts: builder.mutation({
        query: (buyProducts) => {
          return {
            url: "/purchases/buy-products",
            body: buyProducts,
            method: "POST",
          };
        },
      }),
      updateUser: builder.mutation({
        query: ({
          address,
          date_of_birth,
          name,
          phone,
          avatar,
          password,
          new_password,
        }) => {
          return {
            url: "/user",
            body: {
              address,
              date_of_birth,
              name,
              phone,
              avatar,
              password,
              new_password,
            },
            method: "PUT",
          };
        },
      }),
      uploadAvatar: builder.mutation({
        query: ({ image }) => {
          const formData = new FormData();
          formData.append("image", image);
          return {
            url: "/user/upload-avatar",
            body: formData,
            method: "POST",
          };
        },
      }),
    };
  },
});
export const {
  useRegisterMutation,
  useLoginMutation,
  useGetMeQuery,
  useGetCategoryQuery,
  useGetProductsQuery,
  useGetProductDetailQuery,
  useAddToCartMutation,
  useReadPurchasesQuery,
  useUpdatePurchasesMutation,
  useDeletePurchasesMutation,
  useBuyProductsMutation,
  useUpdateUserMutation,
  useUploadAvatarMutation,
} = rootApi;
