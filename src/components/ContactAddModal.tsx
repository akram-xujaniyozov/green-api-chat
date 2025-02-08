import React, { useState, ChangeEvent } from "react";
import { Dialog, Badge, Flex, Text, Button } from "@radix-ui/themes";
import { PlusIcon, PersonIcon, MobileIcon } from "@radix-ui/react-icons";

import { useContactContext } from "../context";
import { ContactType } from "../types";
import { Input } from "../ui";

export const ContactAddModal: React.FC = () => {
  const [contact, setContact] = useState<ContactType>({
    name: "",
    surname: "",
    phone: "",
  });
  const { addNewContact } = useContactContext();

  const handleClick = () => {
    if (!contact.name || !contact.surname || !contact.phone) return;
    addNewContact(contact);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Badge size="3" className="bg-green-500 px-1">
          <PlusIcon color="white" />
        </Badge>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="350px">
        <Dialog.Title size="4" className="text-lightGreen" weight="medium">
          Add Contact
        </Dialog.Title>
        <Flex direction="column" gap="2">
          <label>
            <Text
              as="p"
              size="3"
              mb="1"
              weight="regular"
              className="text-gray-500"
            >
              Contact Name
            </Text>
            <Input
              placeholder="Name"
              icon={<PersonIcon />}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setContact((prev) => ({ ...prev, name: event.target.value }))
              }
            />
          </label>
          <label>
            <Text
              as="p"
              size="3"
              mb="1"
              weight="regular"
              className="text-gray-500"
            >
              Contact Surname
            </Text>
            <Input
              placeholder="Surname"
              icon={<PersonIcon />}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setContact((prev) => ({ ...prev, surname: event.target.value }))
              }
            />
          </label>
          <label>
            <Text
              as="p"
              size="3"
              mb="1"
              weight="regular"
              className="text-gray-500"
            >
              Phone number
            </Text>
            <Input
              placeholder="Phone"
              icon={<MobileIcon />}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setContact((prev) => ({ ...prev, phone: event.target.value }))
              }
            />
          </label>
        </Flex>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button size="2" variant="outline" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              onClick={handleClick}
              size="2"
              variant="outline"
              color="green"
            >
              Add
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
