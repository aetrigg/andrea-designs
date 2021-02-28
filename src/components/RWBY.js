import { React, Component } from 'react';
import '../App.css';
import { useMediaQuery } from 'react-responsive';
import smiley from '../assets/black-smiley.svg';
import Footer from './Footer';

//desktop media query component
const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  
  //mobile media query component
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 })
    return isMobile ? children : null
  }

class RWBY extends Component{
    render(){
        return(
            <div className="responsive-container">
                <Mobile>
                    <div className="body-mobile">
                        <div className="container-mobile rwby">
                            <div className="header rwby mobile">
                                <div className="smileys-mobile item-a">
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                </div>

                                <p className="item-b">the-uniqueness-of-rwby.html</p>
                            </div>

                            <div className="margins rwby">
                                <h1 className="mobile rwby">THE <span className="pink-letter">U</span><span className="purple-letter">N</span><span className="yellow-letter">I</span><span className="pink-letter">Q</span><span className="purple-letter">U</span><span className="yellow-letter">E</span><span className="pink-letter">N</span><span className="purple-letter">E</span><span className="yellow-letter">S</span><span className="pink-letter">S</span> OF RWBY</h1>
                                <h2 className="mobile rwby">AS FEATURED IN BUTLER UNIVERSITY'S <i><u>THE MALL</u></i></h2>

                                <div className="center">
                                    <div className="rwby-container-mobile">
                                        <div className="rwby-header-mobile">
                                        <div className="smileys-mobile item-a">
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                        </div>

                                        <p className="item-b">rwby-paper.docx</p>
                                        </div>

                                        <div className="rwby-paper-container-mobile">
                                            <div className="rwby-paper-left-mobile">
                                                <p>Andee Trigg</p>
                                                <p>Professor Anwarzai</p>
                                                <p>FYS-102</p>
                                                <p>February 23rd, 2017</p>
                                            </div>

                                            <div className="rwby-paper-center-mobile">
                                                <p>The Uniqueness of <i>RWBY</i></p>
                                            </div>

                                            <div className="rwby-paper-mobile">
                                                <p>When most people think of what an anime is, they would probably think of classics such as <i>Cowboy Bebop</i> or <i>Dragon Ball Z</i>. They probably think of these ones in particular because of the shows’ storylines and traditional animation styles. When most people think of the show <i>RWBY</i>, on the other hand, they do not really categorize it as an anime since they are generally made in only Japan. Anime are unique to the Japanese culture, and because <i>RWBY</i> is made in the United States, some do not consider it to be an anime. However, the creator himself always called the show an anime. This is partly due to many factors, most notably the animation style. <i>RWBY</i> is, without a doubt, one of the most unique animes the world will ever see. Its uniqueness is contributed by the following: the production company, the creator, the animation style, and the intertextuality that lies within each character.</p>

                                                <p>The production company behind <i>RWBY</i> began with three guys&mdash;Burnie Burns, Gustavo Sorola, and Geoff Ramsey&mdash;creating a website titled “Drunk Gamers”. The website featured videos of said guys reviewing video games while they were inebriated. It was essentially a ploy to get free video games from publishing companies, which was obviously a failure. Among other videos, the group created a satirical parody video of Apple’s Mac advertisements, where Sorola was shown to acclaim the pros of playing video games on a Mac, which was heavily under-supported in 2002 <a href="#1">[1]</a>. What was meant to be a silly video for their fellow gaming friends became an instant hit within 24 hours as it circulated throughout the internet and into people’s inboxes. With this sudden surge in popularity, Burns released a trailer for a new web series called <i>Red vs. Blue</i>. However, the site and the trailer eventually died off, and <i>Red vs. Blue</i> was soon forgotten. It was only an email sent to Sorola from the editors of <i>Computer Gaming World</i>, a PC gaming magazine, asking for permission to include the trio’s Apple commercial parody in a promotional CD-ROM that would be included in the latest edition of the magazine, that brought <i>Red vs. Blue</i> back into the picture <a href="#2">[2]</a>. They created a new website that shared a domain with the name, where they uploaded their parody video, as well as beginning to actually film a pilot for <i>Red vs. Blue</i>. On April 1st, 2003, the first episode of <i>Red vs. Blue</i> was uploaded to the website, and Rooster Teeth <a href="#3">[3]</a> was born.</p>

                                                <p>As of now, it has been almost 14 years since the first episode of <i>Red vs. Blue</i> released to the public. Since then, there has been 14 seasons of <i>Red vs. Blue</i>, with another season premiering on April 1st, 2017. While <i>Red vs. Blue</i> has been extremely successful, the team decided that they wanted to do more. They began by starting a podcast in December of 2008, titled the <i>Drunk Tank Podcast</i>, but it was later changed to the <i>Rooster Teeth Podcast</i> in 2011; they currently have seven podcasts now, two of them having the main cast as people from different divisions. From there, Rooster Teeth created a new branch called Achievement Hunter in 2008 that focuses on getting “achievements” from games on the Xbox 360, as well as providing humorous content over a wide variety of videos that are about video games. Alongside Achievement Hunter, other branches of Rooster Teeth include Funhaus, The Know, and Game Kids. In 2009, Rooster Teeth began uploading live-action videos, with <i>Rooster Teeth Shorts</i> being the first, and <i>The Gauntlet</i>, <i>Immersion</i>, <i>Day 5</i>, and others following. In 2014, Rooster Teeth announced that they were launching a crowd-funding campaign to fund their feature film, <i>Lazer Team</i> <a href="#4">[4]</a>. Within 11 hours of the fundraiser starting, Rooster Teeth had made their goal of $650,000, and reached $1.6 million just two days later. The movie was released in theaters on January 16th, 2016. Rooster Teeth also obviously does animation, including <i>RWBY</i> and <i>Red vs. Blue</i>, as well as the <i>Rooster Teeth Animated Adventures</i>, <i>Camp Camp</i>, and <i>X-Ray & Vav</i>.</p>

                                                <p>Alongside enjoyable content, Rooster Teeth also hosts RTX, a convention for their fans to attend. What was originally a community event held in their home city of Austin, Texas has now grown to cater to fans in not just the United States, but also Australia and soon the United Kingdom. In 2011, the first RTX event was initially going to have about 200 people, but ticket counts estimated to be 500. These fans toured the Rooster Teeth office as well as took part in a special episode of <i>Immersion</i>. Since this was successful, Rooster Teeth held RTX again in 2012, though this time it was centered to be more like an actual convention and less of a gathering, with over 4,500 fans attending. The following year, over 10,000 people attended RTX. As of RTX 2016, 60,000 people have attended <a href="#5">[5]</a>. In 2015, RTX Australia was announced, and it occurred from January 23-24th. The Australian convention was then renamed to RTX Sydney, and in 2017 just under 20,000 fans attended <a href="#6">[6]</a>. In 2017, Rooster Teeth announced that they would be hosting a convention in London, titled RTX London. This convention is taking place on October 14-15th, 2017. Today, the convention is considered less of a chance to see favorite members of Rooster Teeth and is geared more toward gaming and Internet culture. </p>

                                                <p>From animation to games to podcasts to their own convention, it is clear that Rooster Teeth is not only a unique animation company, but a unique company in general, for there is no one else in the world that currently is doing what Rooster Teeth is doing. Even if there is, it is difficult that they will be able to achieve the same magnitude of recognition and fans. The creator behind <i>RWBY</i> was practically a perfect fit for Rooster Teeth.</p>

                                                <p>Monty Oum, the mastermind behind <i>RWBY</i>, was born on June 22nd, 1981 in Providence, Rhode Island. Even though he is American, Oum has claimed that his nationality is a mix of Cambodian, Vietnamese, Chinese, and Japanese <a href="#7">[7]</a>. Oum dropped out of high school for unknown reasons, and set to work making fan videos over popular video games. He released <i>Haloid</i> in January of 2007, which featured a character from the video game <i>Halo 2</i> and another from the video game <i>Metroid Prime</i> fighting in an ultimate showdown <a href="8">[8]</a>. This video went viral, and it piqued the interest of Midway Games. They hired Oum on as a combat designer just two months after <i>Haloid</i> premiered. One year later, Oum left Midway Games to instead work for Namco Bandai Games as an animator and combat designer for their video game, <i>Afro Samurai</i> <a href="#9">[9]</a>. Oum then met Burnie Burns in 2009 at a convention, and the two talked about him coming to work at Rooster Teeth. One year later, it was announced at another convention that Oum would be working with Rooster Teeth as an animator for their series, <i>Red vs. Blue</i>.</p>

                                                <p>However, Oum had other ideas. While Oum was “half-awake during one of [his] many 35-hour-long marathon animation session … The name of the show and core characters came to [him] in a flash” <a href="#10">[10]</a>. He pitched this idea for a series to Burns and Hullum, who in turn struck a deal with Oum; as long as production for <i>Red vs. Blue</i> finished on schedule, then the opportunity would be given to Oum. When production for season 10 of <i>Red vs. Blue</i> wrapped, Oum set to work on determining what the visual style of the show would be and made Ruby, the main character, as well as forming rules for the universe he was creating. Once these were set, Oum created Ruby’s weapon and then “spent a week, by himself, making the Red Trailer … Finally, at the Monday company-wide meeting [Oum] came out, set the laptop on the table, and showed the trailer. Jaws dropped. You could see everyone understood now that this was something big.” <a href="#11">[11]</a>. Getting the okay from the production company, Oum set to work on the other trailers that would later be released to the public. <i>RWBY</i> was officially underway.</p>

                                                <p>After two successful seasons of the show and a supposed third season in the works, Oum suddenly passed away on February 1st, 2015 after being in a coma for ten days due to having an allergic reaction while undergoing a simple medical procedure <a href="#12">[12]</a>. For a short while, it was unknown whether or not <i>RWBY</i> would continue, considering the fact that only Oum knew what was to become of <i>RWBY</i>. However, <i>RWBY</i> was confirmed that it would continue and that the newest season would still premiere on time. According to Gray Maddock, the head of Rooster Teeth’s animation branch, Oum’s team had “known the direction in which the next volumes will be headed, and [they] are committed to bringing these tales to you” <a href="#13">[13]</a>. However, it is unknown exactly how much the <i>RWBY</i> team knows about the future of the story, and what they plan to do after they have exhausted Oum’s ideas.</p>

                                                <p>It is no doubt that Oum was a unique individual with a passion for animating in an unconventional style. However, it was always implied that Oum’s workflow was designed for him to work at his most efficient, not the team’s. Thus, it is no surprise that shortly after Oum passed away, Rooster Teeth and the <i>RWBY</i> team scrapped Oum’s workflow for what they believed would be a more efficient workflow for the whole team. Since Volume 3 was already underway when Oum passed, part of the volume is animated in Poser&mdash;Oum’s preferred software, while the rest is animated in Maya. Beginning with Volume 4, all of <i>RWBY</i> is now animated in Autodesk Maya, which is a more popular and widely-used animation program. Newville even expresses in his letter that Oum’s workflow worked best for only him and Oum and allowed only them to work quicker, not the team <a href="#14">[14]</a>. While this new workflow makes <i>RWBY</i> overall somewhat less unique, this paper only discusses the first season of <i>RWBY</i>, and the first season’s animation style is undoubtedly unconventional and unique.</p>

                                                <p>As mentioned previously, Smith Micro’s Poser is the main program used to animate <i>RWBY</i>. Clearly, this is a program that many people do not use as Oum states that “many people are often surprised to hear that most of my work is done in … Poser” <a href="#15">[15]</a>. Oum used Poser for most of his animations, including his work done in <i>Red vs. Blue</i>. It is obvious that when Oum had a chance to make his own series, he would use the animation program that he was most efficient and comfortable with to bring his vision to life; that vision being a way to show “a two-dimensional, toon-shaded look, but with all the depth and complexity of a 3D-animated production” <a href="#16">[16]</a>. Essentially, Oum wanted the show to look like a typical anime while also having the power to move the ‘camera’ and characters like one would in a 3D animation in order to create epic fight scenes.</p>

                                                <p>Of course, using an unconventional program meant that the team ran into issues and problems. Oum created many unique ‘pipelines’ and tools that would plug into Poser to help the team use the application to help with the unconventional demands of <i>RWBY</i>. Furthermore, Oum always reminded the team to find solutions to issues in any possible way, regardless if the solution was the right way to fix it. Oum stated that “If it’s not in the manual but still gets the job done, [he is] all for it” <a href="#17">[17]</a>. As for the technical problems, Oum preferred to find a creative way around the problem instead of trying to solve it. A good example of this way of thinking is by animating a scene to be shown from a particular angle instead of multiple angles, and then setting the shots that are needed to come from only that angle. </p>

                                                <p>Oum was all about the fight scenes and aesthetics of <i>RWBY</i> than the actual story itself, and this is due in part to the fact that Oum and his workflow were all about creating epic combat sequences and making his work look pretty. In fact, it was said epic combat sequences that made him famous, as well as what led him to joining Rooster Teeth and working on <i>Red vs. Blue</i>; before Oum, <i>Red vs. Blue</i> centered around humorous dialogue and not much else, and the introduction of Oum caused for more drama and fight scenes to occur, thus making the show richer. While the choreographed fight scenes in <i>RWBY</i> between both characters and monsters play a major role in the uniqueness of <i>RWBY</i>, it is also the storyline and the intertextuality within each and every character that makes this show truly unique and interesting to fans.</p>

                                                <p>The story of <i>RWBY</i> takes place in the world of Remnant, in which four kingdoms live together and fight against dark, powerful forces of creature known as Grimm. Prior to the main story, mankind was forced to battle Grimm for means of survival and were on a losing streak until they discovered Dust, which is a source of energy that is as mysterious and confusing as it sounds. Using Dust, mankind was able to fight against Grimm and eventually build civilizations. In the present day, people who use Dust to fight off Grimm are known as Hunters and Huntresses. The tale of <i>RWBY</i> follows four Huntresses-in-training as they attend the prestigious Beacon Academy in the city of Vale. While the series is mainly about the girls, there are also other teams that they are either friends or foes with, such as: Team JNPR (pronounced juniper), Team CRDL (pronounced cardinal), and Team SSSN (pronounced sun).</p>

                                                <p>Due to the length of this paper, I will only be focusing on the intertextualities within the four main characters of the show. These four characters create the team <i>RWBY</i>. In Team RWBY, each character alludes to a fairytale character. Let us begin with the “star” of the show, Ruby Rose. Ruby constantly wears a red, hooded cloak everywhere, even into battle where it can be used against her. It is this red cloak that makes it clear she is alluded to the fairytale character <i>Little Red Cap</i>, from which the name bears the title of the story by the Grimm Brothers <a href="#18">[18]</a>. However, the character is more commonly known as Little Red Riding Hood. In <i>Little Red Cap</i>, the young girl sets off to take food to her sick grandmother who lives on the other side of the woods. She comes face to face with a wolf, and naively gives the wolf information on where she is going. Little Red’s grandmother is then eaten by the wolf, who then pretends to be the grandmother when Little Red comes, and after convincing her to come to bed, the wolf eats Little Red as well. While Ruby has yet to be eaten by a wolf, she does possess similar traits to Little Red, one of which is her childish behavior. A good example of this is the fact that Ruby is still indeed a child who was accepted to an upper-level school two years earlier, thus making her two years younger than her peers. She is naïve and innocent, both of which are traits of Little Red. After all, Little Red does not recognize in <i>Little Red Cap</i> that the wolf was bad, because she is too innocent. Ruby, on the other hand, has a distorted belief that if she became a huntress, she would eventually become a hero like those told in the fairy tales.</p>

                                                <p>Now let’s focus on Weiss Schnee, Ruby’s partner. Her name literally translates to White Snow in German, and if that is not a dead giveaway of who her character alludes to, then I am not sure what else I could say. Weiss alludes to the character Snow White from the Grimm Brothers’ story, <i>Snow White</i> <a href="#19">[19]</a>. Besides the fact that Weiss’ name is Snow White, there are also some more subtle nods that point to her allusion. The first is the fact that she is heiress to the Schnee Dust Company. According to the opening narration of “Ruby Rose”, Dust was created by humans in order to fight the Grimm who were overtaking their world (0:51-1:04) <a href="#20">[20]</a>. It is one of the most popular energy sources in the world of <i>RWBY</i>, and they are shaped like jewels. The fact that Weiss is heiress to “one of the largest producers of energy propellant in the world” according to Blake Belladonna in “The Shining Beacon” could be a nod toward <i>Snow White</i> (3:02-3:08) <a href="#21">[21]</a>. In <i>Snow White</i>, the seven dwarves that Snow White lived with when she was hiding from her stepmother were jewel miners, and the Dust from the Schnee Dust Company is also mined and eventually turned into crystalized forms. Not to mention the fact that Dust is highly valuable in RWBY, just like how jewels are highly valuable in <i>Snow White</i>. There is also Weiss’ theme song, which plays during her trailer, and the title of the song is “Mirror, Mirror” <a href="#22">[22]</a>. This is yet another allusion toward <i>Snow White</i>, since a mirror plays a crucial role in the story. If it were not for the mirror, after all, then I believe that the story would never have happened. Finally, there’s the apple. In <i>Snow White</i>, Snow White is finally killed by her stepmother when she eats a poisoned apple. There are two allusions to apples in regards to Weiss. One of these allusions is Weiss’ necklace. Though the pendant looks like a dark circle, Oum has confirmed that the pendant on her necklace is indeed an apple <a href="#23">[23]</a>. Furthermore, in the episode “Jaunedice”, during the lunch scene Weiss is shown to only have an apple for lunch, which is definitely not a coincidence <a href="#24">[24]</a>.</p>

                                                <p>Now let us focus on Yang Xiao Long, who is Ruby’s older half-sister. She has golden hair and becomes incredibly angry when it is messed with. As seen in her trailer, Yang will go “super saiyan” when her hair is ripped from her head <a href="#25">[25]</a>. While this is somewhat of an allusion to <i>Dragon Ball Z</i>, another anime series, Oum was leaning more toward Yang to be an allusion to Goldilocks in the Grimm Brothers’ tale <i>Goldilocks and the Three Bears</i> [26]. While the two characters definitely have golden locks, the similarities pretty much end there. However, the first time Yang fights outside of her trailer is in the episode “The Emerald Forest”. In the episode, she fights against two Ursai, which are two types of Grimm that are based loosely on grizzly bears <a href="#27">[27]</a>. Goldilocks does not fight the three bears in her tale, but the fact that there are bears involved is enough for me to consider this an allusion. </p>

                                                <p>The last character in Team RWBY is Blake Belladonna, who alludes to Beauty from Jeanne-Marie LePrince de Beaumont’s <i>Beauty and the Beast</i> <a href="#28">[28]</a>. Let us start with her last name. Belladonna means “fair lady” in Italian, and also refers to beauty. Just like Weiss, Blake’s name is a dead giveaway to who she alludes to. Furthermore, in <i>Beauty and the Beast</i>, Beauty is constantly teased by her older siblings because she prefers a good book instead of partying, which Blake exhibits similarly. The first time we see her in “The Shining Beacon”, she is shown to be reading a book as one of Weiss’ dust glasses rolls to her feet. When she picks it up, she is more engrossed in her book than she is in this object at first (2:30-2:36) <a href="#29">[29]</a>. Just one episode later, in “The Shining Beacon: Part 2”, we once again see Blake reading a book (4:15-4:20) <a href="#30">[30]</a>. She also prefers to read her book than to try and make conversation with Yang and Ruby. Belle is also shown to be rather quiet as she prefers to not talk to people.</p>

                                                <p>In conclusion, <i>RWBY</i> is undoubtedly a unique anime; from the production company to the creator to the animation style to the storyline itself, <i>RWBY</i> has proven to raise the stakes of what can be considered a modern anime. While others have yet to attempt quite what <i>RWBY</i> is doing, there is no doubt that similar styles will appear in the future due to the reception of the show. The first episode of the first season was initially premiered at RTX 2013, and all three screenings of the episode had been completely packed with eager fans. These fans then went on to create fan-related content in the form of writing, art, and cosplay. Since the premiere of <i>RWBY</i>, there has even been a reported 9% increase in views on Rooster Teeth’s YouTube channel <a href="#31">[31]</a>. Rooster Teeth took a risk with <i>RWBY</i>, and in the end, it paid off. The show has become something truly unique that fans all around the world have, and will continue to look forward to for years to come.</p>
                                            </div>

                                            <div className="rwby-references-mobile">
                                                <div className="rwby-paper-center-mobile">
                                                    <p>Notes</p>
                                                </div>

                                                <p id="1">[1] Jamespoppy22. “Gamer Apple Switch.” YouTube. YouTube, 17 Mar 2006. Web. Retrieved from https://www.youtube.com/watch?v=xo4BpgfWiBE.</p>

                                                <p id="2">[2] Rigney, Ryan. “How Rooster Teeth Won the Internet With Red vs. Blue.” Wired. Condé Nast, 25 May 2012. Web. Retrieved from https://www.wired.com/2012/05/rooster-teeth-red-vs-blue/.</p>

                                                <p id="3">[3] The name “Rooster Teeth” is derived from “cockbite”, which was an insult used by thhe characters during season one of <i>Red vs. Blue</i>.</p>

                                                <p id="4">[4] “Glib Shark Interviews Burnie Burns.” Glib Shark. Tumblr, 24 Mar 2014. Web. Retrieved from http://glibshark.tumblr.com/post/77961145770/
                                                the-godfather-of-rooster-teeth-and-pioneer-of-the/.</p>

                                                <p id="5">[5] Brouwer, Bree. “RTX 2016: The Good, The Bad, And Everything Interesting In-Between.” Forbes. Forbes, 6 Jul 2016. Web. Retrieved from https://www.forbes.com/sites/breebrouwer/
                                                2016/07/06/rtx-2016-highlights/.</p>

                                                <p id="6">[6] Imms, Jason. “Hideo Kojima is Heading to RTX Sydney 2017.” GameSpot. CBS Interactive, 14 Nov 2016. Web. Retrieved from http://www.gamespot.com/articles/
                                                hideo-kojima-is-heading-to-rtx-sydney-2017/1100-6445421/.</p>

                                                <p id="7">[7] Oum, Monty (montyoum). “’@ShawnaKnut: @montyoum Quick question. What’s your nationality?’ I am Cambodian, Vietnamese, Chinese, and Japanese! :)” 16 Jul 2013, 2:46 a.m. Tweet. Retrieved from https://twitter.com/montyoum/status/
                                                346156789307437057.</p>

                                                <p id="8">[8] ACEfromRUSSIA. “HALOID (Halo + Metroid Prime – Master Chief VS Samus Aran).” YouTube. YouTube, 22 Apr 2007. Web. Retrieved from https://www.youtube.com/watch?v=cL-mR79GErU/.</p>

                                                <p id="9">[9] Monkelban, Andrew. “Monty Oum – Hail to the King.” PopTen. PopTen, 29 Jul 2009. Web. Retrieved from http://www.popten.net/2009/07/monty-oum-hail-to-the-king/.</p>

                                                <p id="10">[10] “The 3D Secrets behind hip anime series RWBY.” Creative Bloq. Future PLC, 16 Sep 2013. Web. Retrieved from http://www.creativebloq.com/animation/rbwy-anime-action-dynamic-3d-twist-9134477.</p>

                                                <p id="11">[11] Newville, Shane. “An Open Letter to All Who Treasured Monty Oum.” pg. 8. 2016. Retrieved from https://drive.google.com/file/d/0B-H0KuOwKFYwZTJxbXg0SG5CTEE/view?pref=2&pli=1.</p>

                                                <p id="12">[12] matt [Matt Hullum]. “Monty Oum Has Passed Away.” RoosterTeeth, 02 Feb 2015. Web. Retrieved from http://roosterteeth.com/post/3302319.</p>

                                                <p id="13">[13] gray [Gray Maddock]. “The Future of RWBY.” RoosterTeeth, 04 Mar 2015. Web. Retrieved from http://roosterteeth.com/post/3318124.</p>

                                                <p id="14">[14] Newville, Shane. pg. 9-12. 2016.</p>

                                                <p id="15">[15] “The 3D secrets behind hip anime series RWBY.” 2013.</p>

                                                <p id="16">[16] “The 3D secrets behind hip anime series RWBY.” 2013.</p>

                                                <p id="17">[17] “The 3D secrets behind hip anime series RWBY.” 2013.</p>

                                                <p id="18">[18] Grimm, Jacob and Wilhelm. “Little Red Cap.” University of Pittsburgh. University of Pittsburgh. Web. Retrieved from http://www.pitt.edu/~dash/grimm053.html.</p>

                                                <p id="19">[19] Grimm, Jacob and Wilhelm. “Little Snow-White.” University of Pittsburgh. University of Pittsburgh. Web. Retrieved from http://www.pitt.edu/~dash/grimm053.html.</p>

                                                <p id="20">[20] RoosterTeeth. “RWBY Chapter 1: Ruby Rose.” YouTube. YouTube, 25 Jul 2013. Web. Retrieved from https://www.youtube.com/watch?v=-sGiE10zNQM.</p>

                                                 <p id="21">[21] RoosterTeeth. “RWBY Chapter 2: The Shining Beacon.” YouTube. YouTube, 04 Aug 2013. Web. Retrieved from https://www.youtube.
                                                 com/watch?v=sLv6FfHlxmI.</p>

                                                <p id="22">[22] RoosterTeeth. “RWBY ‘White’ Trailer.” YouTube. YouTube, 14 Feb 2013. Web. Retrieved from https://www.youtube.com/watch?v=Vt9vl8iAN5Q</p>

                                                <p id="23">[23] Oum, Monty (montyoum). “@shensper her necklace is an apple if that means anything :)” 3 Dec 2011, 4:26 p.m. Tweet. Retrieved from https://twitter.com/montyoum/status/
                                                407984207307096064.</p>

                                                <p id="24">[24] RoosterTeeth. “RWBY Chapter 11: Jaunedice.” YouTube. YouTube, 3 Oct 2013. Web. Retrieved from https://www.youtube.com/watch?v=N5D0NDAR8sU.</p>

                                                <p id="25">[25] RoosterTeeth. “RWBY ‘Yellow’ Trailer.” YouTube. YouTube, 1 Jun 2013. Web. Retrieved from https://www.youtube.com/watch?v=QCw_aAS7vWI.</p>

                                                <p id="26">[26] Grimm, Jacob and Wilhelm. “Goldilocks and the Three Bears.” Yankee Web. Yankee Web. Web. Retrieved from https://yankeeweb.net/
                                                library/storytime/grimmbros/grimmbros_20.html.</p>

                                                <p id="27">[27] RoosterTeeth. “RWBY Chapter 6: The Emerald Forest.” YouTube. YouTube, 29 Aug 2013. Web. Retrieved from https://www.youtube.com/watch?v=N1TJ5YA3jfw.</p>

                                                <p id="28">[28] Beaumont, Jeanne-Marie LePrince de. “Beauty and the Beast.” University of Pittsburgh. University of Pittsburgh. Web. 13 Feb 2017. Retrieved from http://www.pitt.edu/~dash/beauty.html.</p>

                                                <p id="29">[29] RoosterTeeth. “RWBY Chapter 2: The Shining Beacon.”</p>

                                                <p id="30">[30] RoosterTeeth. “RWBY Chapter 3: The Shining Beacon: Part 2.” YouTube. YouTube, 08 Aug 2013. Web. Retrieved from </p>

                                                <p id="31">[31] Cohen, Joshua. “Top 50 Most Viewed U.S. YouTube Channels.” TubeFilter. Rackspace, 16 Aug 2013. Retrieved from http://www.tubefilter.com/2013/08/16/top-50-most-viewed-us-youtube-channels-081613</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>

                <Desktop>
                    <div className="body">
                        <div className="container rwby">
                            <div className="header rwby">
                                <div className="smileys item-a">
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                </div>

                                <p className="item-b">rwby-paper.html</p>
                            </div>

                            <div className="margins rwby">
                                <h1 className="rwby">THE <span className="pink-letter">U</span><span className="purple-letter">N</span><span className="yellow-letter">I</span><span className="pink-letter">Q</span><span className="purple-letter">U</span><span className="yellow-letter">E</span><span className="pink-letter">N</span><span className="purple-letter">E</span><span className="yellow-letter">S</span><span className="pink-letter">S</span> OF RWBY</h1>
                                <h2 className="rwby">AS FEATURED IN BUTLER UNIVERSITY'S <u><i>THE MALL</i></u></h2>

                                <div className="center">
                                    <div className="rwby-container">
                                        <div className="rwby-header">
                                            <div className="smileys item-a">
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                            </div>

                                            <p className="item-b">the-uniqueness-of-rwby.docx</p>
                                        </div>

                                        <div className="rwby-paper-container">
                                            <div className="rwby-paper-left">
                                                <p>Andee Trigg</p>
                                                <p>Professor Anwarzai</p>
                                                <p>FYS-102</p>
                                                <p>February 23rd, 2017</p>
                                            </div>

                                            <div className="rwby-paper-center">
                                                <p>The Uniqueness of <i>RWBY</i></p>
                                            </div>

                                            <div className="rwby-paper">
                                                <p>When most people think of what an anime is, they would probably think of classics such as <i>Cowboy Bebop</i> or <i>Dragon Ball Z</i>. They probably think of these ones in particular because of the shows’ storylines and traditional animation styles. When most people think of the show <i>RWBY</i>, on the other hand, they do not really categorize it as an anime since they are generally made in only Japan. Anime are unique to the Japanese culture, and because <i>RWBY</i> is made in the United States, some do not consider it to be an anime. However, the creator himself always called the show an anime. This is partly due to many factors, most notably the animation style. <i>RWBY</i> is, without a doubt, one of the most unique animes the world will ever see. Its uniqueness is contributed by the following: the production company, the creator, the animation style, and the intertextuality that lies within each character.</p>

                                                <p>The production company behind <i>RWBY</i> began with three guys&mdash;Burnie Burns, Gustavo Sorola, and Geoff Ramsey&mdash;creating a website titled “Drunk Gamers”. The website featured videos of said guys reviewing video games while they were inebriated. It was essentially a ploy to get free video games from publishing companies, which was obviously a failure. Among other videos, the group created a satirical parody video of Apple’s Mac advertisements, where Sorola was shown to acclaim the pros of playing video games on a Mac, which was heavily under-supported in 2002 <a href="#1">[1]</a>. What was meant to be a silly video for their fellow gaming friends became an instant hit within 24 hours as it circulated throughout the internet and into people’s inboxes. With this sudden surge in popularity, Burns released a trailer for a new web series called <i>Red vs. Blue</i>. However, the site and the trailer eventually died off, and <i>Red vs. Blue</i> was soon forgotten. It was only an email sent to Sorola from the editors of <i>Computer Gaming World</i>, a PC gaming magazine, asking for permission to include the trio’s Apple commercial parody in a promotional CD-ROM that would be included in the latest edition of the magazine, that brought <i>Red vs. Blue</i> back into the picture <a href="#2">[2]</a>. They created a new website that shared a domain with the name, where they uploaded their parody video, as well as beginning to actually film a pilot for <i>Red vs. Blue</i>. On April 1st, 2003, the first episode of <i>Red vs. Blue</i> was uploaded to the website, and Rooster Teeth <a href="#3">[3]</a> was born.</p>

                                                <p>As of now, it has been almost 14 years since the first episode of <i>Red vs. Blue</i> released to the public. Since then, there has been 14 seasons of <i>Red vs. Blue</i>, with another season premiering on April 1st, 2017. While <i>Red vs. Blue</i> has been extremely successful, the team decided that they wanted to do more. They began by starting a podcast in December of 2008, titled the <i>Drunk Tank Podcast</i>, but it was later changed to the <i>Rooster Teeth Podcast</i> in 2011; they currently have seven podcasts now, two of them having the main cast as people from different divisions. From there, Rooster Teeth created a new branch called Achievement Hunter in 2008 that focuses on getting “achievements” from games on the Xbox 360, as well as providing humorous content over a wide variety of videos that are about video games. Alongside Achievement Hunter, other branches of Rooster Teeth include Funhaus, The Know, and Game Kids. In 2009, Rooster Teeth began uploading live-action videos, with <i>Rooster Teeth Shorts</i> being the first, and <i>The Gauntlet</i>, <i>Immersion</i>, <i>Day 5</i>, and others following. In 2014, Rooster Teeth announced that they were launching a crowd-funding campaign to fund their feature film, <i>Lazer Team</i> <a href="#4">[4]</a>. Within 11 hours of the fundraiser starting, Rooster Teeth had made their goal of $650,000, and reached $1.6 million just two days later. The movie was released in theaters on January 16th, 2016. Rooster Teeth also obviously does animation, including <i>RWBY</i> and <i>Red vs. Blue</i>, as well as the <i>Rooster Teeth Animated Adventures</i>, <i>Camp Camp</i>, and <i>X-Ray & Vav</i>.</p>

                                                <p>Alongside enjoyable content, Rooster Teeth also hosts RTX, a convention for their fans to attend. What was originally a community event held in their home city of Austin, Texas has now grown to cater to fans in not just the United States, but also Australia and soon the United Kingdom. In 2011, the first RTX event was initially going to have about 200 people, but ticket counts estimated to be 500. These fans toured the Rooster Teeth office as well as took part in a special episode of <i>Immersion</i>. Since this was successful, Rooster Teeth held RTX again in 2012, though this time it was centered to be more like an actual convention and less of a gathering, with over 4,500 fans attending. The following year, over 10,000 people attended RTX. As of RTX 2016, 60,000 people have attended <a href="#5">[5]</a>. In 2015, RTX Australia was announced, and it occurred from January 23-24th. The Australian convention was then renamed to RTX Sydney, and in 2017 just under 20,000 fans attended <a href="#6">[6]</a>. In 2017, Rooster Teeth announced that they would be hosting a convention in London, titled RTX London. This convention is taking place on October 14-15th, 2017. Today, the convention is considered less of a chance to see favorite members of Rooster Teeth and is geared more toward gaming and Internet culture. </p>

                                                <p>From animation to games to podcasts to their own convention, it is clear that Rooster Teeth is not only a unique animation company, but a unique company in general, for there is no one else in the world that currently is doing what Rooster Teeth is doing. Even if there is, it is difficult that they will be able to achieve the same magnitude of recognition and fans. The creator behind <i>RWBY</i> was practically a perfect fit for Rooster Teeth.</p>

                                                <p>Monty Oum, the mastermind behind <i>RWBY</i>, was born on June 22nd, 1981 in Providence, Rhode Island. Even though he is American, Oum has claimed that his nationality is a mix of Cambodian, Vietnamese, Chinese, and Japanese <a href="#7">[7]</a>. Oum dropped out of high school for unknown reasons, and set to work making fan videos over popular video games. He released <i>Haloid</i> in January of 2007, which featured a character from the video game <i>Halo 2</i> and another from the video game <i>Metroid Prime</i> fighting in an ultimate showdown <a href="8">[8]</a>. This video went viral, and it piqued the interest of Midway Games. They hired Oum on as a combat designer just two months after <i>Haloid</i> premiered. One year later, Oum left Midway Games to instead work for Namco Bandai Games as an animator and combat designer for their video game, <i>Afro Samurai</i> <a href="#9">[9]</a>. Oum then met Burnie Burns in 2009 at a convention, and the two talked about him coming to work at Rooster Teeth. One year later, it was announced at another convention that Oum would be working with Rooster Teeth as an animator for their series, <i>Red vs. Blue</i>.</p>

                                                <p>However, Oum had other ideas. While Oum was “half-awake during one of [his] many 35-hour-long marathon animation session … The name of the show and core characters came to [him] in a flash” <a href="#10">[10]</a>. He pitched this idea for a series to Burns and Hullum, who in turn struck a deal with Oum; as long as production for <i>Red vs. Blue</i> finished on schedule, then the opportunity would be given to Oum. When production for season 10 of <i>Red vs. Blue</i> wrapped, Oum set to work on determining what the visual style of the show would be and made Ruby, the main character, as well as forming rules for the universe he was creating. Once these were set, Oum created Ruby’s weapon and then “spent a week, by himself, making the Red Trailer … Finally, at the Monday company-wide meeting [Oum] came out, set the laptop on the table, and showed the trailer. Jaws dropped. You could see everyone understood now that this was something big.” <a href="#11">[11]</a>. Getting the okay from the production company, Oum set to work on the other trailers that would later be released to the public. <i>RWBY</i> was officially underway.</p>

                                                <p>After two successful seasons of the show and a supposed third season in the works, Oum suddenly passed away on February 1st, 2015 after being in a coma for ten days due to having an allergic reaction while undergoing a simple medical procedure <a href="#12">[12]</a>. For a short while, it was unknown whether or not <i>RWBY</i> would continue, considering the fact that only Oum knew what was to become of <i>RWBY</i>. However, <i>RWBY</i> was confirmed that it would continue and that the newest season would still premiere on time. According to Gray Maddock, the head of Rooster Teeth’s animation branch, Oum’s team had “known the direction in which the next volumes will be headed, and [they] are committed to bringing these tales to you” <a href="#13">[13]</a>. However, it is unknown exactly how much the <i>RWBY</i> team knows about the future of the story, and what they plan to do after they have exhausted Oum’s ideas.</p>

                                                <p>It is no doubt that Oum was a unique individual with a passion for animating in an unconventional style. However, it was always implied that Oum’s workflow was designed for him to work at his most efficient, not the team’s. Thus, it is no surprise that shortly after Oum passed away, Rooster Teeth and the <i>RWBY</i> team scrapped Oum’s workflow for what they believed would be a more efficient workflow for the whole team. Since Volume 3 was already underway when Oum passed, part of the volume is animated in Poser&mdash;Oum’s preferred software, while the rest is animated in Maya. Beginning with Volume 4, all of <i>RWBY</i> is now animated in Autodesk Maya, which is a more popular and widely-used animation program. Newville even expresses in his letter that Oum’s workflow worked best for only him and Oum and allowed only them to work quicker, not the team <a href="#14">[14]</a>. While this new workflow makes <i>RWBY</i> overall somewhat less unique, this paper only discusses the first season of <i>RWBY</i>, and the first season’s animation style is undoubtedly unconventional and unique.</p>

                                                <p>As mentioned previously, Smith Micro’s Poser is the main program used to animate <i>RWBY</i>. Clearly, this is a program that many people do not use as Oum states that “many people are often surprised to hear that most of my work is done in … Poser” <a href="#15">[15]</a>. Oum used Poser for most of his animations, including his work done in <i>Red vs. Blue</i>. It is obvious that when Oum had a chance to make his own series, he would use the animation program that he was most efficient and comfortable with to bring his vision to life; that vision being a way to show “a two-dimensional, toon-shaded look, but with all the depth and complexity of a 3D-animated production” <a href="#16">[16]</a>. Essentially, Oum wanted the show to look like a typical anime while also having the power to move the ‘camera’ and characters like one would in a 3D animation in order to create epic fight scenes.</p>

                                                <p>Of course, using an unconventional program meant that the team ran into issues and problems. Oum created many unique ‘pipelines’ and tools that would plug into Poser to help the team use the application to help with the unconventional demands of <i>RWBY</i>. Furthermore, Oum always reminded the team to find solutions to issues in any possible way, regardless if the solution was the right way to fix it. Oum stated that “If it’s not in the manual but still gets the job done, [he is] all for it” <a href="#17">[17]</a>. As for the technical problems, Oum preferred to find a creative way around the problem instead of trying to solve it. A good example of this way of thinking is by animating a scene to be shown from a particular angle instead of multiple angles, and then setting the shots that are needed to come from only that angle. </p>

                                                <p>Oum was all about the fight scenes and aesthetics of <i>RWBY</i> than the actual story itself, and this is due in part to the fact that Oum and his workflow were all about creating epic combat sequences and making his work look pretty. In fact, it was said epic combat sequences that made him famous, as well as what led him to joining Rooster Teeth and working on <i>Red vs. Blue</i>; before Oum, <i>Red vs. Blue</i> centered around humorous dialogue and not much else, and the introduction of Oum caused for more drama and fight scenes to occur, thus making the show richer. While the choreographed fight scenes in <i>RWBY</i> between both characters and monsters play a major role in the uniqueness of <i>RWBY</i>, it is also the storyline and the intertextuality within each and every character that makes this show truly unique and interesting to fans.</p>

                                                <p>The story of <i>RWBY</i> takes place in the world of Remnant, in which four kingdoms live together and fight against dark, powerful forces of creature known as Grimm. Prior to the main story, mankind was forced to battle Grimm for means of survival and were on a losing streak until they discovered Dust, which is a source of energy that is as mysterious and confusing as it sounds. Using Dust, mankind was able to fight against Grimm and eventually build civilizations. In the present day, people who use Dust to fight off Grimm are known as Hunters and Huntresses. The tale of <i>RWBY</i> follows four Huntresses-in-training as they attend the prestigious Beacon Academy in the city of Vale. While the series is mainly about the girls, there are also other teams that they are either friends or foes with, such as: Team JNPR (pronounced juniper), Team CRDL (pronounced cardinal), and Team SSSN (pronounced sun).</p>

                                                <p>Due to the length of this paper, I will only be focusing on the intertextualities within the four main characters of the show. These four characters create the team <i>RWBY</i>. In Team RWBY, each character alludes to a fairytale character. Let us begin with the “star” of the show, Ruby Rose. Ruby constantly wears a red, hooded cloak everywhere, even into battle where it can be used against her. It is this red cloak that makes it clear she is alluded to the fairytale character <i>Little Red Cap</i>, from which the name bears the title of the story by the Grimm Brothers <a href="#18">[18]</a>. However, the character is more commonly known as Little Red Riding Hood. In <i>Little Red Cap</i>, the young girl sets off to take food to her sick grandmother who lives on the other side of the woods. She comes face to face with a wolf, and naively gives the wolf information on where she is going. Little Red’s grandmother is then eaten by the wolf, who then pretends to be the grandmother when Little Red comes, and after convincing her to come to bed, the wolf eats Little Red as well. While Ruby has yet to be eaten by a wolf, she does possess similar traits to Little Red, one of which is her childish behavior. A good example of this is the fact that Ruby is still indeed a child who was accepted to an upper-level school two years earlier, thus making her two years younger than her peers. She is naïve and innocent, both of which are traits of Little Red. After all, Little Red does not recognize in <i>Little Red Cap</i> that the wolf was bad, because she is too innocent. Ruby, on the other hand, has a distorted belief that if she became a huntress, she would eventually become a hero like those told in the fairy tales.</p>

                                                <p>Now let’s focus on Weiss Schnee, Ruby’s partner. Her name literally translates to White Snow in German, and if that is not a dead giveaway of who her character alludes to, then I am not sure what else I could say. Weiss alludes to the character Snow White from the Grimm Brothers’ story, <i>Snow White</i> <a href="#19">[19]</a>. Besides the fact that Weiss’ name is Snow White, there are also some more subtle nods that point to her allusion. The first is the fact that she is heiress to the Schnee Dust Company. According to the opening narration of “Ruby Rose”, Dust was created by humans in order to fight the Grimm who were overtaking their world (0:51-1:04) <a href="#20">[20]</a>. It is one of the most popular energy sources in the world of <i>RWBY</i>, and they are shaped like jewels. The fact that Weiss is heiress to “one of the largest producers of energy propellant in the world” according to Blake Belladonna in “The Shining Beacon” could be a nod toward <i>Snow White</i> (3:02-3:08) <a href="#21">[21]</a>. In <i>Snow White</i>, the seven dwarves that Snow White lived with when she was hiding from her stepmother were jewel miners, and the Dust from the Schnee Dust Company is also mined and eventually turned into crystalized forms. Not to mention the fact that Dust is highly valuable in RWBY, just like how jewels are highly valuable in <i>Snow White</i>. There is also Weiss’ theme song, which plays during her trailer, and the title of the song is “Mirror, Mirror” <a href="#22">[22]</a>. This is yet another allusion toward <i>Snow White</i>, since a mirror plays a crucial role in the story. If it were not for the mirror, after all, then I believe that the story would never have happened. Finally, there’s the apple. In <i>Snow White</i>, Snow White is finally killed by her stepmother when she eats a poisoned apple. There are two allusions to apples in regards to Weiss. One of these allusions is Weiss’ necklace. Though the pendant looks like a dark circle, Oum has confirmed that the pendant on her necklace is indeed an apple <a href="#23">[23]</a>. Furthermore, in the episode “Jaunedice”, during the lunch scene Weiss is shown to only have an apple for lunch, which is definitely not a coincidence <a href="#24">[24]</a>.</p>

                                                <p>Now let us focus on Yang Xiao Long, who is Ruby’s older half-sister. She has golden hair and becomes incredibly angry when it is messed with. As seen in her trailer, Yang will go “super saiyan” when her hair is ripped from her head <a href="#25">[25]</a>. While this is somewhat of an allusion to <i>Dragon Ball Z</i>, another anime series, Oum was leaning more toward Yang to be an allusion to Goldilocks in the Grimm Brothers’ tale <i>Goldilocks and the Three Bears</i> [26]. While the two characters definitely have golden locks, the similarities pretty much end there. However, the first time Yang fights outside of her trailer is in the episode “The Emerald Forest”. In the episode, she fights against two Ursai, which are two types of Grimm that are based loosely on grizzly bears <a href="#27">[27]</a>. Goldilocks does not fight the three bears in her tale, but the fact that there are bears involved is enough for me to consider this an allusion. </p>

                                                <p>The last character in Team RWBY is Blake Belladonna, who alludes to Beauty from Jeanne-Marie LePrince de Beaumont’s <i>Beauty and the Beast</i> <a href="#28">[28]</a>. Let us start with her last name. Belladonna means “fair lady” in Italian, and also refers to beauty. Just like Weiss, Blake’s name is a dead giveaway to who she alludes to. Furthermore, in <i>Beauty and the Beast</i>, Beauty is constantly teased by her older siblings because she prefers a good book instead of partying, which Blake exhibits similarly. The first time we see her in “The Shining Beacon”, she is shown to be reading a book as one of Weiss’ dust glasses rolls to her feet. When she picks it up, she is more engrossed in her book than she is in this object at first (2:30-2:36) <a href="#29">[29]</a>. Just one episode later, in “The Shining Beacon: Part 2”, we once again see Blake reading a book (4:15-4:20) <a href="#30">[30]</a>. She also prefers to read her book than to try and make conversation with Yang and Ruby. Belle is also shown to be rather quiet as she prefers to not talk to people.</p>

                                                <p>In conclusion, <i>RWBY</i> is undoubtedly a unique anime; from the production company to the creator to the animation style to the storyline itself, <i>RWBY</i> has proven to raise the stakes of what can be considered a modern anime. While others have yet to attempt quite what <i>RWBY</i> is doing, there is no doubt that similar styles will appear in the future due to the reception of the show. The first episode of the first season was initially premiered at RTX 2013, and all three screenings of the episode had been completely packed with eager fans. These fans then went on to create fan-related content in the form of writing, art, and cosplay. Since the premiere of <i>RWBY</i>, there has even been a reported 9% increase in views on Rooster Teeth’s YouTube channel <a href="#31">[31]</a>. Rooster Teeth took a risk with <i>RWBY</i>, and in the end, it paid off. The show has become something truly unique that fans all around the world have, and will continue to look forward to for years to come.</p>
                                            </div>

                                            <div className="rwby-references">
                                                <div className="rwby-paper-center">
                                                    <p>Notes</p>
                                                </div>

                                                <p id="1">[1] Jamespoppy22. “Gamer Apple Switch.” YouTube. YouTube, 17 Mar 2006. Web. Retrieved from https://www.youtube.com/watch?v=xo4BpgfWiBE.</p>

                                                <p id="2">[2] Rigney, Ryan. “How Rooster Teeth Won the Internet With Red vs. Blue.” Wired. Condé Nast, 25 May 2012. Web. Retrieved from https://www.wired.com/2012/05/rooster-teeth-red-vs-blue/.</p>

                                                <p id="3">[3] The name “Rooster Teeth” is derived from “cockbite”, which was an insult used by thhe characters during season one of <i>Red vs. Blue</i>.</p>

                                                <p id="4">[4] “Glib Shark Interviews Burnie Burns.” Glib Shark. Tumblr, 24 Mar 2014. Web. Retrieved from http://glibshark.tumblr.com/post/77961145770/the-godfather-of-rooster-teeth-and-pioneer-of-the/.</p>

                                                <p id="5">[5] Brouwer, Bree. “RTX 2016: The Good, The Bad, And Everything Interesting In-Between.” Forbes. Forbes, 6 Jul 2016. Web. Retrieved from https://www.forbes.com/sites/breebrouwer/2016/07/06/rtx-2016-highlights/.</p>

                                                <p id="6">[6] Imms, Jason. “Hideo Kojima is Heading to RTX Sydney 2017.” GameSpot. CBS Interactive, 14 Nov 2016. Web. Retrieved from http://www.gamespot.com/articles/hideo-kojima-is-heading-to-rtx-sydney-2017/1100-6445421/.</p>

                                                <p id="7">[7] Oum, Monty (montyoum). “’@ShawnaKnut: @montyoum Quick question. What’s your nationality?’ I am Cambodian, Vietnamese, Chinese, and Japanese! :)” 16 Jul 2013, 2:46 a.m. Tweet. Retrieved from https://twitter.com/montyoum/status/346156789307437057.</p>

                                                <p id="8">[8] ACEfromRUSSIA. “HALOID (Halo + Metroid Prime – Master Chief VS Samus Aran).” YouTube. YouTube, 22 Apr 2007. Web. Retrieved from https://www.youtube.com/watch?v=cL-mR79GErU/.</p>

                                                <p id="9">[9] Monkelban, Andrew. “Monty Oum – Hail to the King.” PopTen. PopTen, 29 Jul 2009. Web. Retrieved from http://www.popten.net/2009/07/monty-oum-hail-to-the-king/.</p>

                                                <p id="10">[10] “The 3D Secrets behind hip anime series RWBY.” Creative Bloq. Future PLC, 16 Sep 2013. Web. Retrieved from http://www.creativebloq.com/animation/rbwy-anime-action-dynamic-3d-twist-9134477.</p>

                                                <p id="11">[11] Newville, Shane. “An Open Letter to All Who Treasured Monty Oum.” pg. 8. 2016. Retrieved from https://drive.google.com/file/d/0B-H0KuOwKFYwZTJxbXg0SG5CTEE/view?pref=2&pli=1.</p>

                                                <p id="12">[12] matt [Matt Hullum]. “Monty Oum Has Passed Away.” RoosterTeeth, 02 Feb 2015. Web. Retrieved from http://roosterteeth.com/post/3302319.</p>

                                                <p id="13">[13] gray [Gray Maddock]. “The Future of RWBY.” RoosterTeeth, 04 Mar 2015. Web. Retrieved from http://roosterteeth.com/post/3318124.</p>

                                                <p id="14">[14] Newville, Shane. pg. 9-12. 2016.</p>

                                                <p id="15">[15] “The 3D secrets behind hip anime series RWBY.” 2013.</p>

                                                <p id="16">[16] “The 3D secrets behind hip anime series RWBY.” 2013.</p>

                                                <p id="17">[17] “The 3D secrets behind hip anime series RWBY.” 2013.</p>

                                                <p id="18">[18] Grimm, Jacob and Wilhelm. “Little Red Cap.” University of Pittsburgh. University of Pittsburgh. Web. Retrieved from http://www.pitt.edu/~dash/grimm053.html.</p>

                                                <p id="19">[19] Grimm, Jacob and Wilhelm. “Little Snow-White.” University of Pittsburgh. University of Pittsburgh. Web. Retrieved from http://www.pitt.edu/~dash/grimm053.html.</p>

                                                <p id="20">[20] RoosterTeeth. “RWBY Chapter 1: Ruby Rose.” YouTube. YouTube, 25 Jul 2013. Web. Retrieved from https://www.youtube.com/watch?v=-sGiE10zNQM.</p>

                                                <p id="21">[21] RoosterTeeth. “RWBY Chapter 2: The Shining Beacon.” YouTube. YouTube, 04 Aug 2013. Web. Retrieved from https://www.youtube.com/watch?v=sLv6FfHlxmI.</p>

                                                <p id="22">[22] RoosterTeeth. “RWBY ‘White’ Trailer.” YouTube. YouTube, 14 Feb 2013. Web. Retrieved from https://www.youtube.com/watch?v=Vt9vl8iAN5Q</p>

                                                <p id="23">[23] Oum, Monty (montyoum). “@shensper her necklace is an apple if that means anything :)” 3 Dec 2011, 4:26 p.m. Tweet. Retrieved from https://twitter.com/montyoum/status/407984207307096064.</p>

                                                <p id="24">[24] RoosterTeeth. “RWBY Chapter 11: Jaunedice.” YouTube. YouTube, 3 Oct 2013. Web. Retrieved from https://www.youtube.com/watch?v=N5D0NDAR8sU.</p>

                                                <p id="25">[25] RoosterTeeth. “RWBY ‘Yellow’ Trailer.” YouTube. YouTube, 1 Jun 2013. Web. Retrieved from https://www.youtube.com/watch?v=QCw_aAS7vWI.</p>

                                                <p id="26">[26] Grimm, Jacob and Wilhelm. “Goldilocks and the Three Bears.” Yankee Web. Yankee Web. Web. Retrieved from https://yankeeweb.net/library/storytime/grimmbros/grimmbros_20.html.</p>

                                                <p id="27">[27] RoosterTeeth. “RWBY Chapter 6: The Emerald Forest.” YouTube. YouTube, 29 Aug 2013. Web. Retrieved from https://www.youtube.com/watch?v=N1TJ5YA3jfw.</p>

                                                <p id="28">[28] Beaumont, Jeanne-Marie LePrince de. “Beauty and the Beast.” University of Pittsburgh. University of Pittsburgh. Web. 13 Feb 2017. Retrieved from http://www.pitt.edu/~dash/beauty.html.</p>

                                                <p id="29">[29] RoosterTeeth. “RWBY Chapter 2: The Shining Beacon.”</p>

                                                <p id="30">[30] RoosterTeeth. “RWBY Chapter 3: The Shining Beacon: Part 2.” YouTube. YouTube, 08 Aug 2013. Web. Retrieved from </p>

                                                <p id="31">[31] Cohen, Joshua. “Top 50 Most Viewed U.S. YouTube Channels.” TubeFilter. Rackspace, 16 Aug 2013. Retrieved from http://www.tubefilter.com/2013/08/16/top-50-most-viewed-us-youtube-channels-081613</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Footer />
            </div>
        )
    }
}

export default RWBY;