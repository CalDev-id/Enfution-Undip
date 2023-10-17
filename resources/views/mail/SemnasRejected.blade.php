<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>

  <div class="text-align: justify">
    {{-- Kata sambutan --}}
    <div>
      <p>Hello,</p>
      <p>We hope this email finds you well. We regret to inform you that your registration for the
        @if ($transaction->peserta_semnas->event == "talk-1")
            <span> Early Talk 1.0 on "Build Critical Thinking to Improve Creative Economy" </span>
        @elseif($transaction->peserta_semnas->event == "talk-2")
            <span> Early Talk 2.0 on "How to Conquer the Economic Industry to Become a Tough Leader" </span>
        @else
            <span> National Seminar Summit on “Developing Creative Human Resources To Support Creative Economy” </span>
        @endif
        was not successfully processed. We apologize for any inconvenience caused.</p>
    </div>

  
    {{-- Informasi Maaf --}}

    <div>
      <p>We sincerely appreciate your interest in the event and believe that you would benefit greatly from the valuable insights shared by our esteemed guest speaker. Therefore, we kindly request you to please try registering again or contact our staff for further assistance!</p>
    </div>

    {{-- Info --}}
    <div>
        <p style="margin-bottom: 0">Contact Information:</p> 
        <table cellpadding="0" cellspacing="0">
          <tr style="text-align: left">
            <td>ID Line</td>
            <td style="display: inline-block; margin: 0 10px;">:</td>
            <td>ashilarmdhn (Shila)</td>
          </tr>
          <tr style="text-align: left">
            <td>Phone Number</td>
            <td style="display: inline-block; margin: 0 10px;">:</td>
            <td>0895333186420 (Shila)</td>
          </tr>
        </table>
    </div>

    {{-- Permintaan maaf 2 --}}
    <div style="margin-top: 20px">
      <p>We apologize once again for any inconvenience caused and look forward to your participation in the 
        @if ($transaction->peserta_semnas->event == "talk-1")
            <span> Early Talk 1.0.</span>
        @elseif($transaction->peserta_semnas->event == "talk-2")
            <span> Early Talk 2.0.</span>
        @else
            <span> National Seminar Summit.</span>
        @endif
      </p>
    </div>

    {{-- Best Regards --}}
    <div style="text-align: right; font-weight: 400; margin-top: 30px">
      <span style="font-style: italic">Regards,</span>
      <pre style="font-family: Arial, Helvetica, sans-serif; margin-top: 0; margin-bottom: 0; ">
        National Seminar the 15th Enfution
        <span style="color: rgb(70, 70, 255)" >Management Student Association</span>
        <span style="font-style: italic">Faculty of Economics and Business,</span>
        <span style="font-style: italic">Diponegoro University</span>
      </pre>
      <img src="{{ $message->embed('images/LogoSemnas2.png') }}" alt="" width="200">
    </div>
  </div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
</body>
</html>