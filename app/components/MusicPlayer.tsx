"use client";

import { useState } from "react";
import { Play, Pause, Volume2, SkipForward, SkipBack } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function MusicPlayer({ title, duration }: { title: string; duration: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-primary p-3 rounded-full hover:bg-primary/90 transition"
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>
      
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <div className="flex items-center gap-2">
          <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
          <span className="text-sm text-gray-400">{duration}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-white/10 rounded-full transition">
          <SkipBack className="h-4 w-4" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition">
          <SkipForward className="h-4 w-4" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition">
          <Volume2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}