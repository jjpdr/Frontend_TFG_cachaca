import { NavDropdown, Dropdown } from "react-bootstrap";

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
                <Dropdown.Item href="/admin-panel/update-product">
                    Alterar produto
                </Dropdown.Item>
                <NavDropdown.Divider />
                <Dropdown.Item href="/admin-panel/update-user">
                    Alterar usuário
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownMenu;
