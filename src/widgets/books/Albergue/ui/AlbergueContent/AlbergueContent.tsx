import { useCallback, useState } from 'react';
import { VideoTrigger } from 'features/Triggers';
import { Footnote } from 'widgets/Footnote';
import {
  AlbergueRainAnimation,
  AlbergueAudio,
  AlbergueSwitchImage,
  AlbergueModalPhoto,
  AlbergueModalVideo,
} from 'widgets/books/Albergue';

const FootnoteVideo = (
  <>
    The Voyager Golden Records are two phonograph
    <AlbergueModalVideo>on the silsdfdsk sandy</AlbergueModalVideo>
    records that contain sounds and images selected to portray the diversity of
    life and culture on Earth. They were attached to the Voyager spacecraft for
    intelligent representatives of extraterrestrial life who might
    hypothetically encounter them.
  </>
);

const AlbergueContent = () => {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  return (
    <div className="chapter">
      <div className="chapter__header">
        <h1>1</h1>
        The Coming of the Storm.
      </div>
      <figure className="quote">
        <blockquote>
          “In search of water and grass they move from place to place, and
          though they have no cities enclosed by inner and outer walls, no place
          of residence, and they do not cultivate the fields, yet each also has
          an allotted plot of land.”
        </blockquote>
        <figcaption>
          <cite>Sima Qian, “Shi Ji”</cite>
        </figcaption>
      </figure>
      <article className="chapter__body">
        <p>
          The train slowed down for a few minutes, and then, picking up the pace
          leisurely, moved away from the deserted area. Those who remained at
          the small station walked silently down the only path that led to the
          relocant settlement.
        </p>
        <p>
          The September sun was still benign, but with sunset a chill descended,
          and the group did not slow down.
          <AlbergueRainAnimation>
            However, after crossing the small strip of dunes, each of the group
            stopped involuntarily.
          </AlbergueRainAnimation>
        </p>
        <p>
          The carefully glazed dome-shaped houses were arranged in a friendly
          semicircle on a low-lying plain fringed by vaguely discernible hills.
          The mirrored elements on top of the domes, arranged at different
          angles, served as a night landmark, and the long-range flashlight
          included in the relocant kit was guaranteed to find one of the
          mirrors.
        </p>
        <p>
          This place, a symbol of human presence, appeared, at first glance, not
          in the most appropriate place. Stingray knew that a few kilometers
          away there was a now-defunct industrial facility. But the
          communications there were functioning properly, which prompted the
          architectural firm&apos;s activists to design the isle of peace here.
        </p>
        <p>
          Stingray was one of the architects of such isles, places where one
          could pause for a while, take a breath, assess the situation and see
          where the lull was expected. The next phase of multipolar wars changed
          these points, as if in a kaleidoscope, reshaping maps and destinies.
        </p>
        <AlbergueSwitchImage />
        <p>
          As they descended the velvet dunes, people went to their new, albeit
          temporary homes. They were met with the encouraging greeting on a
          waving flag,{' '}
          <Footnote
            title="1"
            description={'J.R.R. Tolkien, The Fellowship of the Ring.'}
          >
            “Not all those who wander are lost”
          </Footnote>
          . In times of crisis, every heartfelt gesture warms, the bureau
          chief&apos;s parting words came to Stingray&apos;s mind.
        </p>
        <p>
          He headed toward the K1 dome, to the studio located on the first floor
          and facing east given the new guest&apos;s early schedule.
        </p>
        <p>
          Turning on the interior blackout, Stingray placed the press case on
          the bed and tiredly exhaled.
        </p>
        <p>
          It was a typical relocant press case: made of lightweight
          high-strength material and designed to fit a standard set of
          accessories, it was essential for long travels.
        </p>
        <p>
          The neo-material sets of clothing, folded in a special way, were
          compressed by the compartment of the case, freeing up space for the
          rest of the items, according to a carefully calibrated list. A
          customized weightless mattress was easily straightened and helped to
          recover at such a resource-intensive time.
        </p>
        <p>
          Having hastily laid out his stuff, Stingray turned on the heliograph
          and ducked into the shower. The projected three-dimensional image
          began to broadcast: “A truce agreement was signed yesterday…”
        </p>
        <p>
          “How long will it last...? Mankind has triggered the perfect storm for
          its existence, perhaps the last in history,” thought Stingray,
          absent-mindedly listening to the news clipping. “This train picked up
          speed; it rushes toward the abyss, and the passengers frantically
          search for the stop-cock handle, which ironically is not provided or
          has not worked for a long time. Then they run to the locked door of
          the driver&apos;s car, take it by storm and magically end up in the
          last carriage. It&apos;s a vicious circle.”
        </p>
        <p>
          “…the exact number of dead and wounded has not been disclosed at this
          time...” “What is all this in the name of?” Stingray asked himself.
          But he had no answer to that question.
        </p>
        <p>
          The sacred idea of a multipolar world demanded sacrifice. The tandem
          of wars and epidemics, as if taunting the mythical Tantalus,
          faithfully quenched its blood thirst and carnal hunger, parasitizing
          on the branches of an already withered world tree. But hope blossomed
          like a snowdrop breaking through the snow.
        </p>
        <p>
          The sacred idea of a multipolar world demanded sacrifice. The tandem
          of wars and epidemics, as if taunting the mythical Tantalus,
          faithfully quenched its blood thirst and carnal hunger, parasitizing
          on the branches of an already withered world tree. But hope blossomed
          like a snowdrop breaking through the snow.
        </p>
        <p>
          It was a code: a reference to{' '}
          <Footnote
            title="2"
            description={`The Goldilocks principle is named by analogy to the children's story “The Three Bears”, in which a young girl named Goldilocks tastes porridge from three different bowls and finds she prefers porridge that is neither too hot nor too cold, but has just the right temperature. In astrobiology, the Goldilocks zone refers to the habitable zone around a star.`}
          >
            the habitability zone
          </Footnote>
          .
        </p>
        <p>
          “Somewhere up there in the starry sky our new home and our new hope
          are found,” Stingray thought. Lifting his head, he put his face to the
          hot jets of water that warmed him like the rays of a new sun. In the
          golden glow of the house&apos;s interior light, it was as if he were
          floating; he was already a new man. “Perhaps, by breaking away from
          the earth, by flying away from it, we will also overcome the original
          evil within ourselves that pulls us into the vortex with the
          relentless gravity of its grim spiral,” Stingray pondered. He
          remembered a course in ancient Greek: planet — πλανήτης — traveler,
          wanderer. “We are the children of the planet-wanderer. We ourselves
          are wanderers.”
        </p>
        <img src="../albergue/man.jpg" />
        <p>
          The click of the alarm brought Stingray out of his reflections — the
          day&apos;s water limit was about to run out in ten minutes. After
          drying himself off, he brewed a drip coffee and pulled out the
          ambrosifier, his indispensable companion in relocations. Then he sat
          down in a chair, pressed a button, and closed his eyes.
        </p>
        <p>
          The smells of the spring still cold, but full of life, spilled out
          into the studio, flowing seamlessly into the warm breath of the first
          summer day, cut grass, ripe watermelon, from a carefree June night to
          a melancholic August night. The fresh scent of autumn, the magical
          smells of Christmas Eve, an old wooden trunk and printed books could
          also be sensed.
        </p>
        <p>
          The memories of childhood brought Stingray&apos;s sense of home and
          warmth back for a moment.
        </p>
        <p>
          The ambrosifier reduced the flow and then stopped spraying altogether.
        </p>
        <p>
          A gift from his father, carefully collecting scents until he came of
          age, it was all absorbed, analyzed and regenerated. Artificial
          intelligence has found complex combinations of simple and easily
          replenished components.
        </p>
        <p>
          “No, this is not artificial intelligence,” thought the man, who had
          briefly become a child, in the middle of the desert, “this is the
          human reaching out to the divine. This is the asymptotic path,
          aspiring, approaching, but not reaching the infinite perfect straight
          line.
        </p>
        <p>“Perhaps we won&apos;t have other smells there...”</p>
        <p>
          Stingray did not notice how the heliograph finished broadcasting. It
          was already dark. He wastefully left the lamp on and stepped out into
          the twilight that covered the desert.
        </p>
        <p>
          The figures of the people who had come with him to Albergue by train
          could be seen nearby. No one broke the silence, exchanging approving
          nods and glances.
        </p>
        <p>
          The Albergue was formerly reserved for the pilgrims of El Camino, the
          route to the city of Santiago de Compostela. Now the place served as a
          shelter, as if here,
          <VideoTrigger isActive={active} onClick={handleClick}>
            on the silk sandy
          </VideoTrigger>
          carpet, we became a little closer to new worlds.
        </p>
        <p>
          <AlbergueAudio>Stingray looked up at the sky again.</AlbergueAudio>
        </p>
        <p>
          A swarm of satellites hovered over his head; the thousand-year-old
          stars twinkled welcomingly. Somewhere out there was their new home,
          their new haven, their new Albergue.
        </p>
        <p>
          <AlbergueModalPhoto>
            Stingray thought of Jimmy Carter&apos;s words from a message to
            extraterrestrial civilizations:
          </AlbergueModalPhoto>
          <Footnote title="3" description={FootnoteVideo}>
            “We human beings are still divided into nation states, but these
            states are rapidly becoming a single global civilization.”
          </Footnote>
        </p>
        <p>
          One civilization, but no longer here, not on Earth. There is one more
          final relocation awaiting us.
        </p>
        <p>We will overcome this damage to our essence, to our DNA...</p>
        <p>We will try to start over…</p>
      </article>
      <style>
        {`.chapter {
          font-size: 2rem;
          line-height: 1.2;
        }

        .chapter__header {
          display: flex;
          flex-direction: column;
          row-gap: 1em;
          padding: var(--wrapper-padding);
          text-align: center;
          font-style: italic;
          font-weight: 300;
          color: var(--gray50);
        }

        .chapter__body {
          display: flex;
          flex-direction: column;
          row-gap: 0.4em;
        }

        h1 {
          font-weight: 400;
          color: black;
          font-size: 3.2rem;
          text-transform: uppercase;
          font-style: normal;
        }

        .quote {
          padding: 4rem var(--wrapper-padding); 
          padding-right: 0;
          text-align: right;
          font-size: 1.8rem;
          line-height: 1.4;        
        }

        .quote cite {
          font-size: 1.4rem;
          font-style: normal;
          font-weight: 600;
          display: block;
          margin-top: 0.8em;
        }

        p {
          line-height: 1.44;
          text-indent: 1em;
          text-align: justify;
          hyphens: auto;
          orphans: 2;
          widows: 2;
          hyphenate-character: "-";
          word-wrap: break-word;
        }

        p:first-child {
          text-indent: 0;
        }`}
      </style>
    </div>
  );
};

export default AlbergueContent;
