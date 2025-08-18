"use client";

import { Stack } from "@mui/material";
import JourneyHeader from "./_components/JourneyHeader";
import JourneyCard from "./_components/JourneyCard";
import { useRouter } from "next/navigation";

const journeys = [
  {
    title: "Consistent Evenings 🌙",
    description:
      "Build a relaxing evening routine to wind down, fall asleep faster, and improve your sleep quality.",
    isRecommended: true,
  },
  {
    title: "Consistent Mornings ☀️ ",
    description:
      "Wake up feeling refreshed and energized by establishing a consistent morning routine.",
  },
];

const OnboardingJourneyPage = () => {
  const router = useRouter();

  const handleNav = (journeyTitle: string) => {
    if (journeyTitle === "Consistent Evenings 🌙") {
      router.push("/sleep-journey/active");
    }
  };

  return (
    <Stack spacing={6} sx={{ p: 3, alignItems: "center", width: "100%" }}>
      <JourneyHeader />
      <Stack direction={"row"} spacing={3}>
        {journeys.map((journey) => (
          <JourneyCard
            key={journey.title}
            journeyTitle={journey.title}
            journeyDescription={journey.description}
            isRecommended={journey.isRecommended}
            callback={() => handleNav(journey.title)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default OnboardingJourneyPage;
