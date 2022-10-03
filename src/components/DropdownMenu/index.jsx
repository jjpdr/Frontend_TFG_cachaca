import Dropdown from "react-bootstrap/Dropdown";

const DropdownMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Painel Admin
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/admin-panel/register-product">
          Registrar produto
        </Dropdown.Item>
        <Dropdown.Item href="/admin-panel/delete-product">
          Excluir produto
        </Dropdown.Item>
        <Dropdown.Item href="/action-3">Alterar produto</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
