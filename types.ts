export interface Annotation {
  text?: string; // the text of the annotation
  start: number; // when annotation should appear during audio playback, in seconds
  end?: number; // when annotation should disappear, in seconds (not implemented)
  percentX?: number;  // percent x-coordinate of center of pan.  0 = left, 50 = middle, 100 = right
  percentY?: number;  // percent y-coordinate of center of pan.  0 = top, 50 = middle, 100 = bottom
  scale?: number;  // zoom scale.  2 = 200% zoom, 0.5 = 50% zoom
}

export interface ArtworkNarration {
  id: string; // Unique ID for the artwork
  slug: string; // Unique URL slug for the artwork
  title: string; // Name of the artwork
  date: string; // Date of the artwork
  artist: string; // Name of the artist
  artistBio: string; // Bio of the artist
  artistText: string; // Text of the artist bio
  narrator: string; // Name of the narrator
  narratorText: string; // Text of the narrator bio
  museumLocation: string; // Location of the artwork in the museum
  description: string; // Description of the artwork
  text: string; // Full text of the narration
  duration: number; // total length of audio in seconds
  annotations: Annotation[]; // the annotations that should appear during the narration
}

export interface GalleryTour {
  slug: string; // Unique URL slug for the tour
  name: string; // Name of the tour
  artworks: ArtworkNarration[]; // the artworks in the tour
}





