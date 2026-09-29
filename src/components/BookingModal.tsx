import React, { useState } from 'react';
import { X, Phone, Check, Copy, Calendar, Users, BedDouble, ShieldCheck } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface BookingModalProps {
  details: {
    checkIn: string;
    checkOut: string;
    guests: number;
    dormType: string;
    totalEstimate: number;
  };
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ details, onClose }) => {
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [copied, setCopied] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const reservationText = `Hello Bed Station AC Dormitory, I would like to reserve a stay:
• Name: ${guestName || 'Traveller'}
• Contact: ${guestPhone || 'Direct'}
• Check-In: ${details.checkIn}
• Check-Out: ${details.checkOut}
• Beds: ${details.guests} (${details.dormType})
• Estimated: ₹${details.totalEstimate}
Address: C28/68 A, Opp. Sardar Patel Dharamshala, Maldahiya, Teliyabag, Varanasi`;

  const handleCopy = () => {
    navigator.clipboard.writeText(reservationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F3] text-[#101820] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#101820]/15 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#101820]/5 hover:bg-[#101820]/10 text-[#101820]"
          aria-label="Close reservation dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C66A45] font-mono font-bold mb-1">
              BED STATION RESERVATION
            </div>
            <h3 className="text-2xl font-bold font-display text-[#101820] mb-2">
              Confirm Your Dorm Bed
            </h3>
            <p className="text-xs text-[#101820]/70 mb-5">
              Fill in your contact details below to finalize your booking directly with our front desk.
            </p>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#101820]/10 mb-5 space-y-2 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#101820]/5">
                <span className="text-[#101820]/60 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C66A45]" /> Dates:
                </span>
                <span className="font-semibold text-[#101820]">
                  {details.checkIn} to {details.checkOut}
                </span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-[#101820]/5">
                <span className="text-[#101820]/60 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C66A45]" /> Beds / Category:
                </span>
                <span className="font-semibold text-[#101820]">
                  {details.guests} × {details.dormType}
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[#101820] font-bold">Estimated Payable:</span>
                <span className="font-bold text-base text-[#C66A45] font-display">
                  ₹{details.totalEstimate}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleConfirmReservation} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#101820] block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma / Sarah Jenkins"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#101820]/15 bg-white text-sm text-[#101820] focus:outline-none focus:ring-2 focus:ring-[#C66A45]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#101820] block mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 09876543210"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#101820]/15 bg-white text-sm text-[#101820] focus:outline-none focus:ring-2 focus:ring-[#C66A45]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#C66A45] hover:bg-[#b05836] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>FINALIZE RESERVATION</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-2 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <Check className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold font-display text-[#101820] mb-2">
              Ready to Lock In Your Stay!
            </h3>
            <p className="text-xs text-[#101820]/75 max-w-sm mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-[#101820]">{guestName}</strong>. Please call the front desk now to confirm instant availability, or copy your booking details.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-[#101820]/10 text-left text-xs mb-6 space-y-1.5 font-mono">
              <div className="text-[#527C78] font-bold">RESERVATION DETAILS READY:</div>
              <div>• Guest: {guestName} ({guestPhone})</div>
              <div>• Stay: {details.checkIn} → {details.checkOut}</div>
              <div>• {details.guests} Bed(s) · ₹{details.totalEstimate} Total</div>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${HOSTEL_INFO.phoneTel}`}
                className="w-full py-3.5 bg-[#C66A45] hover:bg-[#b05836] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW: {HOSTEL_INFO.phone}</span>
              </a>

              <button
                onClick={handleCopy}
                className="w-full py-3 bg-white hover:bg-[#F4EBDD] text-[#101820] font-semibold text-xs uppercase tracking-wider rounded-xl border border-[#101820]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY DETAILS TO SHARE'}</span>
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#101820]/10 flex items-center justify-center gap-2 text-[11px] text-[#101820]/50 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-[#527C78]" />
          <span>Bed Station AC Dormitory · Maldahiya, Teliyabag, Varanasi</span>
        </div>
      </div>
    </div>
  );
};
