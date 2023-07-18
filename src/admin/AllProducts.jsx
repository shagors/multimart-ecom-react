import React from "react";
import { Col, Container, Row } from "reactstrap";
import useGetData from "../hooks/useGetData";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted product!");
  };

  // console.log(productsData);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td>
                      <h3 className="text-center py-5 fw-bold">Loading.....</h3>
                    </td>
                  </tr>
                ) : (
                  productsData?.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt="Product-img" />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          onClick={() => deleteProduct(item.id)}
                          className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
