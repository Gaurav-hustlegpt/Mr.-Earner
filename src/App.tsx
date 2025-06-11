import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  "Wake up at 5AM. No negotiation.",
  "Cold shower. Reset your brain.",
  "Write down your top 1 goal for the day.",
  "Do 30 mins of focused learning (coding or design).",
  "Send 5 cold DMs or job proposals.",
  "Post 1 piece of value on Twitter, LinkedIn or Insta.",
  "Track what you did wrong today. Improve 1%."
];

export default function App() {
  const [task, setTask] = useState("");

  const generateTask = () => {
    const today = new Date().getDay();
    const randomIndex = Math.floor(Math.random() * plans.length);
    setTask(plans[(today + randomIndex) % plans.length]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">HustleGPT - Daily Action Generator</h1>
      <Button className="mb-4" onClick={generateTask}>
        Generate Daily Task
      </Button>
      {task && (
        <Card className="bg-white text-black max-w-md">
          <CardContent className="p-4">
            <p className="text-lg">{task}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}