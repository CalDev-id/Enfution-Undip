<?php

namespace App\Mail;

use App\Models\SemnasParticipant;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Inertia\Inertia;

class SemnasVerif extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */

    public $participant;
    static private $greeting;
    public function __construct(SemnasParticipant $participant)
    {
        $this->participant = $participant;
        if ($participant->event == "talk-1") {
            SemnasVerif::$greeting = "Early Talk 1.0!";
        } elseif ($participant->event == "talk-2") {
            SemnasVerif::$greeting = "Early Talk 2.0!";
        } else {
            SemnasVerif::$greeting = "National Seminar Summit!";
        }
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Woohoo! You're All Set for the " . SemnasVerif::$greeting,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.SemnasVerif',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
