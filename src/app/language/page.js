'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { useGameStore } from "../_lib/stores/gameStore";

const ESTONIAN = "ESTONIAN";
const ENGLISH = "ENGLISH";

export default function Page() {
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const router = useRouter();

  const {
    updateGameSettings,
  } = useGameStore();

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)

    // Update Zustand store with the game data
    updateGameSettings({
      type: language === 'English' ? ENGLISH: ESTONIAN
    });

    if (language === 'English') {
      router.push('/creategame');
    } else if (language === 'Estonian') {
      router.push('/creategame');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl text-primary-foreground font-bold mb-8">Choose the language</h1>
      <div className="flex space-x-4 mb-8">
        <Button
          onClick={() => handleLanguageSelect('English')}
          variant={selectedLanguage === 'English' ? 'default' : 'outline'}
        >
          English to Estonian
        </Button>
        <Button
          onClick={() => handleLanguageSelect('Estonian')}
          variant={selectedLanguage === 'Estonian' ? 'default' : 'outline'}
        >
          Estonian to English
        </Button>
      </div>

    </main>
  )
}