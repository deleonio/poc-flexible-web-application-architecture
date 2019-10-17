import { RouterService } from "../../services/router/service";
import { StorageService } from "../../services/storage/service";
import { STARTUP_TIMESTAMP } from "../../shares/constant";
import { DI } from "../../shares/injector";

interface Framework {
  name: string;
  version: string;
}

export class AppController {
  public finishedRendering: number | null = null;
  private storageService: StorageService = DI.get("StorageService");
  public readonly framework: Framework = DI.get("Framework");

  constructor() {
    this.finishedRendering = Date.now() - STARTUP_TIMESTAMP;
    const list: any[] = this.storageService.getItem("list") || [];
    list.push(Date.now());
    this.storageService.setItem("list", list);
    this.storageService.setItem("upcommingTime", this.finishedRendering);
    RouterService.navigate("/series");
  }
}
