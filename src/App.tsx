/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import EventTypes from './components/EventTypes';
import VendorCollaboration from './components/VendorCollaboration';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <Services />
        <EventTypes />
        <VendorCollaboration />
        <Booking />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
