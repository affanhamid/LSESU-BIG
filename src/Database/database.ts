import { db } from './firebaseConfig';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export async function fetchEvents() {
    const eventsSnapshot = await getDocs(collection(db, 'events'));

    const events = eventsSnapshot.docs.map(doc => {
        const data = doc.data();
        data.date = new Date(data.date.seconds * 1000).toLocaleDateString();
        return data;
    });

    return events;
};

export async function fetchUpcomingEvents() {
    const upcomingEventsSnapshot = await getDocs(collection(db, 'upcoming events'));

    const events = upcomingEventsSnapshot.docs.map(doc => {
        const data = doc.data();
        data.date = new Date(data.date.seconds * 1000).toDateString();
        return data;
    });

    return events;
};

export async function fetchMembers() {
    const execSnapshot = await getDocs(collection(db, 'executive members'));
    const headsSnapshot = await getDocs(collection(db, 'heads of divisions'));

    const execMembers = execSnapshot.docs.map(doc => doc.data());
    const heads = headsSnapshot.docs.map(doc => doc.data());

    return { execMembers, heads };
};

export async function fetchPackages() {
    // Fetch all documents from 'packages' collection excluding 'prices'
    const packagesSnapshot = await getDocs(collection(db, 'packages'));
    const packages = packagesSnapshot.docs
        .filter(doc => doc.id !== 'prices') // Exclude 'prices' document
        .map(doc => doc.data());

    // Fetch the 'prices' document separately
    const priceSnap = await getDoc(doc(db, 'packages', 'prices'));
    const prices = priceSnap.data();

    return { prices, items: packages };
}

export async function fetchPastSpeakers() {
    const showcaseSpeakersSnapshot = await getDocs(collection(db, 'showcase speakers'));
    const allSpeakers = await getDocs(collection(db, 'speakers'));

    const showcaseSpeakers = showcaseSpeakersSnapshot.docs.map(doc => doc.data());
    const speakers = allSpeakers.docs.map(doc => doc.data());

    return { showcaseSpeakers, speakers };
};

export async function fetchSponsors() {
    const sponsorsSnapshot = await getDocs(collection(db, 'sponsors'));

    const sponsors = sponsorsSnapshot.docs.map(doc => doc.data());

    return sponsors;
};

export async function fetchTestimonials() {
    const testiSnapshot = await getDocs(collection(db, 'testimonials'));

    const testimonials = testiSnapshot.docs.map(doc => doc.data());

    return testimonials;
};
