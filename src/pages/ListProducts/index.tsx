import { Container, Header, BodyContainer, Table } from "./styles";

import { FaPencilAlt } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

interface IProduct {
  id: string;
  name: string;
  code: string;
  sector: string;
  amount: string;
}

export const ProductsList = () => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  const { user, getCurrentUser } = useAuth();

  function getUpdateList(product: IProduct, add = true) {
    const list = productsList.filter((e) => e.id !== product.id);
    if (add) list.unshift(product);
    return list;
  }

  async function handleDeleteProduct(product: IProduct) {
    await api.delete(`product/delete/${product.id}`).then((response) => {
      const list = getUpdateList(product, false);
      setProductsList(list);
    });
  }

  useEffect(() => {
    api.get<IProduct[]>("/product/products").then((response) => {
      setProductsList(response.data);
    });
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Header>
        <h1>Produtos cadastrados!</h1>
      </Header>

      <BodyContainer>
        <Table>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Código</th>
              <th>Quantidade</th>
              <th>Setor</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>
            {productsList.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.code}</td>
                  <td>{product.amount}</td>
                  <td>{product.sector}</td>
                  <td>
                    <Link to={`/updated/${product.id}`}>
                      <button className="edit">
                        <FaPencilAlt size={"15px"} />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => handleDeleteProduct(product)}
                      className="delete"
                    >
                      <BsFillTrashFill size={"15px"} color={"#fff"} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </BodyContainer>
    </Container>
  );
};
