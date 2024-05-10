import { Registry } from "./Registry";
import { registries } from "../database";

export class RegistryService {
  save(registry: Registry) {
    registries.push(registry);
  }
}
