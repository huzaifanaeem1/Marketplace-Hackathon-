import { writeClient } from "./writeClient";

export async function deleteEntity(id: string, type: string) {
  try {
    await writeClient.delete(id);
    return { success: true, message: `${type} deleted successfully `};
  } catch (error) {
    console.error(`Failed to delete ${type}:, error`);
    return { success: false, message: `Failed to delete ${type}` };
  }
}