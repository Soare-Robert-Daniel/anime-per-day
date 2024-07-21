/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface AnimeSchedule {
    [key: string]: AnimeEntry[];
  }
  
interface AnimeEntry {
    title: string;
}

export type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type Schedule = {
    [K in Day]: AnimeEntry[];
};