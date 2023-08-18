<?php

namespace App\Mail;

use App\Models\SemnasTransaction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SemnasRejected extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $transaction;
    static private $rejected;
    public function __construct(SemnasTransaction $transaction)
    {
        //
        $this->transaction = $transaction;
        if ($transaction->peserta_semnas->event == "talk-1") {
            SemnasRejected::$rejected = "Early Talk 1.0 ";
        } elseif ($transaction->peserta_semnas->event == "talk-2") {
            SemnasRejected::$rejected = "Early Talk 2.0 ";
        } else {
            SemnasRejected::$rejected = "National Seminar Summit ";
        }
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Oops! Sorry, We Couldn't Process Your Registration for the " . SemnasRejected::$rejected,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.SemnasRejected',
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
