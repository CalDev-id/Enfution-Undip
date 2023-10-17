<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>

  <div style="text-align: justify">
    {{-- Kata sambutan --}}
    <div>
      <p>Hey there!</p>
      <p>We're thrilled to share some exciting news with you. 
        @if ($participant->event == "talk-1")
            <span> Your registration for Early Talk 1.0 on “Build Critical Thinking to Improve Creative Economy” is a success! </span>
        @elseif($participant->event == "talk-2")
            <span> Your registration for Early Talk 2.0 on “How to Conquer the Economic Industry to Become a Tough Leader” is a success! </span>
        @else
            <span> Your registration for the National Seminar Summit on “Developing Creative Human Resources To Support Creative Economy” is a success! </span>
        @endif
        We couldn't be happier to have you on board for this amazing seminar.</p>
    </div>

    {{-- Tanggal Acara --}}
    <div style="margin-bottom: 20px">
      <p style="margin-bottom: 2px">Mark your calendars with these important details:</p>
      <table style="margin-left: 0" cellpadding="0" cellspacing="0">
        <tr style="text-align: left">
          <th>Date</th>
          <td style="display: inline-block; margin: 0 10px;">:</td>
          @if ($participant->event == "talk-1")
            <td>Saturday, July 15, 2023</td>
          @elseif($participant->event == "talk-2")
            <td>Saturday, September 16, 2023</td>
          @else
            <td>Saturday, October 15, 2023</td>
          @endif
        </tr>
        <tr style="text-align: left">
          <th>Time</th>
          <td style="display: inline-block; margin: 0 10px;">:</td>
          @if ($participant->event == "talk-1")
            <td>12.45 - 14.44 WIB</td>
          @elseif($participant->event == "talk-2")
            <td>12.30 - 14.44 WIB</td>
          @else
            <td>08.00 - 15.00 WIB</td>
          @endif
        </tr>
        <tr style="text-align: left">
          <th>Platform</th>
          <td style="display: inline-block; margin: 0 10px;">:</td>
          @if ($participant->event == "summit")
          <td>Gedung Prof. Soedarto SH, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275</td>
          @else
          <td>Zoom (the link will be sent h-2 days)</td>
          @endif
        </tr>
      </table>
    </div>
    {{-- Informasi Biasa --}}

    <div>
      <p>Get ready to engage with our incredible guest speaker who will be sharing their expertise on 
        @if ($participant->event == "talk-1")
            <span> Early Talk 1.0. </span>
        @elseif($participant->event == "talk-2")
            <span> Early Talk 2.0. </span>
        @else
            <span> National Seminar Summit. </span>
        @endif 
        Along with an insightful and thought-provoking session that will leave you inspired and empowered.</p>
      <p>Once again, congratulations on securing your spot at the 
        @if ($participant->event == "talk-1")
            <span> Early Talk 1.0. </span>
        @elseif($participant->event == "talk-2")
            <span> Early Talk 2.0. </span>
        @else
            <span> National Seminar Summit. </span>
        @endif 
        We can't wait to see you there, actively participating and contributing your unique perspective to the discussions.</p>

        @if ($participant->event == "talk-2")
            <p>Here is the link to our Whatsapp Group! Do not forget to join for more updated infos about the Early Talk 2.0: <br><a href="https://chat.whatsapp.com/EQBR0tvPIgxI2UXUgBisyG">https://chat.whatsapp.com/EQBR0tvPIgxI2UXUgBisyG</a></p>  
        @endif
      <p>If you need anything else in the meantime, feel free to get in touch.</p>
    </div>

    {{-- Salam --}}
    <div>
      <span>Excitedly yours,</span>
      <p style="margin-top: 0">National Seminar the 15th Enfution</p>
      
    </div>

    {{-- Info --}}
    <div>
        <p style="margin-bottom: 0">Contact info:</p> 
        <table cellpadding="0" cellspacing="0">
          <tr style="text-align: left">
            <td>Line</td>
            <td style="display: inline-block; margin: 0 10px;">:</td>
            <td>shaziadn (Nazneen)</td>
          </tr>
          <tr style="text-align: left">
            <td>Whatsapp</td>
            <td style="display: inline-block; margin: 0 10px;">:</td>
            <td>0877 2699 1906 (Nazneen)</td>
          </tr>
        </table>
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