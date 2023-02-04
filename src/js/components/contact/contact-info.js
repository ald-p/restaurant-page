import { setMultipleAttributes } from "../../utilities/elements.utils";

const ContactInfo = () => {
  const container = document.createElement('div');

  const emailGroup = createInfoGroup('EMAIL', 'email@reallygreatsite.com');
  container.appendChild(emailGroup);

  const telGroup = createInfoGroup('TELEPHONE', '123-456-7890');
  container.appendChild(telGroup);
  
  const socialsGroup = document.createElement('div');
  const socialsLabel = document.createElement('h3')
  socialsLabel.textContent = 'SOCIAL MEDIA';
  const socialsLinks = document.createElement('div');
  socialsGroup.appendChild(socialsLabel);
  socialsGroup.appendChild(socialsLinks);
  container.appendChild(socialsGroup);
  
  const instaLink = createSocialsLink('https://www.instagram.com/', 'insta-link');
  socialsLinks.appendChild(instaLink);

  const facebookLink = createSocialsLink('https://www.facebook.com/', 'facebook-link');
  socialsLinks.appendChild(facebookLink);

  const twitterLink = createSocialsLink('https://www.twitter.com/', 'twitter-link');
  socialsLinks.appendChild(twitterLink);

  return container;
};

const createSocialsLink = (path, className) => {
  const link = document.createElement('a');
  link.textContent = className;
  setMultipleAttributes({ href: path, target: '_blank'}, link);
  link.classList.add(className);

  return link;
}

const createInfoGroup = (labelText, infoText) => {
  const group = document.createElement('div');
  const label = document.createElement('h3');
  label.textContent = labelText;
  const info = document.createElement('span');
  info.textContent = infoText;
  group.appendChild(label);
  group.appendChild(info);

  return group;
}

export default ContactInfo;