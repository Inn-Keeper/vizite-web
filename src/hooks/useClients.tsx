
import { Client } from "@/types/appTypes";
import { useEffect, useState } from "react";

export default function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  useEffect(() => {
    fetch('/clients-mock.json')
      .then(res => res.json())
      .then(data => setClients(data.clients));
  }, []);
  return clients;
}