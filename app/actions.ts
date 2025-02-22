"use server"

export async function processGreeting(formData: FormData): Promise<string> {
  const name = formData.get("name")

  if (!name || typeof name !== "string") {
    throw new Error("Name is required")
  }

  // Simulate some server processing time
  await new Promise((resolve) => setTimeout(resolve, 500))

  return `Hello ${name}!`
}

