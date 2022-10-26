import type { JokesResponse, Result } from "@/types/jokes";
import type { AxiosError } from "axios";
import { transformData } from "../utils/helpers";
import { service } from "./base";

export async function getAllJokes(
  searchString: string
): Promise<[AxiosError<unknown, any>, null] | [null, JokesResponse]> {
  return await transformData<JokesResponse>(
    service.request({
      method: "get",
      url: `jokes/search?query=${searchString}`,
    })
  );
}

export async function getJoke(
  searchString: string
): Promise<[AxiosError<unknown, any>, null] | [null, Result]> {
  return await transformData<Result>(
    service.request({
      method: "get",
      url: `jokes/${searchString}`,
    })
  );
}

export async function getAllCategory(): Promise<
  [AxiosError<unknown, any>, null] | [null, string[]]
> {
  return await transformData(
    service.request({
      method: "get",
      url: `jokes/categories`,
    })
  );
}
