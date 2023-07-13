<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use App\Models\CoachingSessionParticipant;
use Illuminate\Contracts\Queue\ShouldQueue;

class CSRejected extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    protected $participant;
    public function __construct(CoachingSessionParticipant $participant)
    {
        $this->participant = $participant;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Coaching Session 2023: IMPORTANT NOTICE!',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.CSRejected',
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