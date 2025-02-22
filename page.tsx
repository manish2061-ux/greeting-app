"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { processGreeting } from "./actions"

export default function Page() {
  const [greeting, setGreeting] = useState<string>("")

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Interactive Greeting App</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col sm:flex-row gap-4"
            action={async (formData) => {
              const result = await processGreeting(formData)
              setGreeting(result)
            }}
          >
            <Input type="text" name="name" placeholder="Enter your name" className="flex-1" required />
            <Button type="submit">Generate Greeting</Button>
          </form>

          {greeting && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-lg font-medium">{greeting}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="server-actions">
              <AccordionTrigger>Server Actions</AccordionTrigger>
              <AccordionContent>
                Server Actions are asynchronous functions executed on the server. In this app, we use a Server Action to
                process the name input and return a greeting. The action is called directly from the form submission.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="components">
              <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
              <AccordionContent>
                <p>This app uses several Shadcn UI components:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Input - For name entry</li>
                  <li>Button - For form submission</li>
                  <li>Card - For content organization</li>
                  <li>Accordion - For explanatory content</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nextjs">
              <AccordionTrigger>Next.js 15 Features</AccordionTrigger>
              <AccordionContent>
                <p>This application showcases several Next.js 15 features:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Server Actions for form processing</li>
                  <li>Enhanced form handling</li>
                  <li>Client and Server Component integration</li>
                  <li>TypeScript support for type safety</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </main>
  )
}

