import FadeIn from '../ui/FadeIn.jsx';
import TrackCard from './TrackCard.jsx';

export default function TrackGrid({ tracks }) {
  return (
    <div className="track-grid">
      {tracks.map((track, index) => (
        <FadeIn key={track.slug} delay={index * 15}>
          <TrackCard track={track} />
        </FadeIn>
      ))}
    </div>
  );
}
