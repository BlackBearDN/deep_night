import { initI18next } from "./lib/locale/init.ts";
import GlobalStyles from "./lib/styles/globalStyles.ts";
import Typography from "./lib/components/Typography/Typography.tsx";
import Button from "./lib/components/Button/Button.tsx";
import Input from "./lib/components/Input/Input.tsx";
import Select from "./lib/components/Select/Select.tsx";
import { useState } from "react";
import Image from "./lib/components/Image/Image.tsx";
import Modal from "./lib/components/Modal/Modal.tsx";
import { AiOutlineEye } from "react-icons/ai";
import Card from "./lib/components/Card/Card.tsx";
import Avatar from "./lib/components/Avatar";

initI18next();

const App = () => {
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div>
      <GlobalStyles />
      <Typography type="h1" style={{ textAlign: "center" }}>
        Deep Night UI
      </Typography>
      <div style={{ width: "calc(100% - 10vw)", padding: "0 5vw 10vh 5vw" }}>
        <Typography type="h2">Buttons</Typography>
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
          <Button appearance="primary">Primary</Button>
          <Button appearance="outlined">Outlined</Button>
          <Button appearance="filled">Filled</Button>
          <Button appearance="filled" shadow>
            Filled shadow
          </Button>
          <Button appearance="icon">
            <AiOutlineEye />
          </Button>
          <Button appearance="backgroundIcon">
            <AiOutlineEye />
          </Button>
        </div>

        <Typography type="h2">Inputs</Typography>
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
          <Input type="text" placeholder="Text" />
          <Input type="password" placeholder="Password" />
        </div>

        <Typography type="h2">Select</Typography>
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
          <Select
            items={[
              {
                label: "Variant 1",
                value: "Value 1",
              },
              {
                label: "Variant 2",
                value: "Value 2",
              },
            ]}
            value={selectValue}
            onChange={(value) => setSelectValue(value)}
          />
          <Typography type="p">Selected value: {selectValue}</Typography>
        </div>

        <Typography type="h2">Image</Typography>
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            width={500}
            style={{ borderRadius: 10 }}
            src="https://i.pinimg.com/originals/33/f3/bd/33f3bda341b51f505bb54f10b5e83b2f.jpg"
          />
        </div>

        <Typography type="h2">Modal</Typography>
        <Button appearance="outlined" onClick={(): void => setOpenModal(true)}>
          Open modal
        </Button>
        <Modal isOpen={openModal} setIsOpen={setOpenModal}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "400px",
                padding: "16px 32px",
                background: "#343434",
                borderRadius: "10px",
              }}
            >
              <Typography type="h2" style={{ textAlign: "center" }}>
                Modal
              </Typography>
              <Typography type="p" style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet
                aspernatur consequuntur corporis culpa deserunt dignissimos dolore dolorem doloribus
                eaque excepturi fugit laborum magnam maxime neque, odio omnis possimus quidem quis
                recusandae tempora, temporibus. Consequatur, est sunt. Animi cumque dolorum ducimus
                eaque fuga hic iste maxime minus, molestiae mollitia necessitatibus non perspiciatis
                quia quibusdam, quo reiciendis repellat sapiente similique sit temporibus velit
                vitae voluptate? In iste minus nobis nostrum rerum sequi voluptas. Animi asperiores
                blanditiis cum delectus deserunt ea facilis perspiciatis reprehenderit repudiandae
                sint! Atque cupiditate ducimus illo illum impedit in, iusto magnam nulla perferendis
                quaerat similique temporibus voluptate.
              </Typography>
            </div>
          </div>
        </Modal>

        <Typography type="h2">Cards</Typography>
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
          <Card
            bordered
            image="https://i.pinimg.com/originals/33/f3/bd/33f3bda341b51f505bb54f10b5e83b2f.jpg"
          >
            <Typography type="span">Content</Typography>
          </Card>
          <Card
            shadow
            title="Title"
            menuActions={[
              { label: "Action 1", handler: () => {} },
              { label: "Action 2", handler: () => {} },
            ]}
          >
            <Typography type="span" style={{ margin: "0 8px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa non possimus qui
              reprehenderit saepe, veniam. Dicta id impedit quis recusandae.
            </Typography>
          </Card>
          <Card title="Title" clicked>
            <Typography type="span" style={{ margin: "0 8px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa non possimus qui
              reprehenderit saepe, veniam. Dicta id impedit quis recusandae.
            </Typography>
          </Card>
        </div>

        <Typography type="h2">Avatar</Typography>
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar style={{ width: 80 }} src="/BNB_logo.png" />
          <Avatar style={{ width: 80 }} text="Black Bear" />
          <Avatar style={{ width: 80 }} />
        </div>
      </div>
    </div>
  );
};

export default App;
