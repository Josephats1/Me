<?php
// Database configuration
$servername = "localhost";
$username = "Josephats";
$password = "Jerr4@Me";
$dbname = "questionnaire";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and prepare data
    $fullname = $conn->real_escape_string($_POST['fullname']);
    $country = $conn->real_escape_string($_POST['country']);
    $age = intval($_POST['age']);
    $height = $conn->real_escape_string($_POST['height']);
    $tone = $conn->real_escape_string($_POST['tone']);
    $marital_status = $conn->real_escape_string($_POST['marital_status']);
    $children = intval($_POST['children']);
    $occupation = $conn->real_escape_string($_POST['occupation']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $whatsapp = $conn->real_escape_string($_POST['whatsapp']);
    $social_media = $conn->real_escape_string($_POST['social_media']);
    $deal_breakers = $conn->real_escape_string($_POST['deal_breakers']);
    
    // Handle arrays (checkboxes)
    $love_languages = isset($_POST['love_languages']) ? implode(", ", $_POST['love_languages']) : "";
    $communication_style = isset($_POST['communication_style']) ? implode(", ", $_POST['communication_style']) : "";
    $core_values = isset($_POST['core_values']) ? implode(", ", $_POST['core_values']) : "";
    $jungian_types = isset($_POST['jungian_types']) ? implode(", ", $_POST['jungian_types']) : "";
    
    $marriage_preference = $conn->real_escape_string($_POST['marriage_preference']);
    $relationship_perspective = $conn->real_escape_string($_POST['relationship_perspective']);
    $myers_briggs = $conn->real_escape_string($_POST['myers_briggs']);
    $cognitive_dissonance = $conn->real_escape_string($_POST['cognitive_dissonance']);
    $love_for_children = isset($_POST['love_for_children']) ? intval($_POST['love_for_children']) : 0;
    $desired_children = $conn->real_escape_string($_POST['desired_children']);
    $emotional_state = $conn->real_escape_string($_POST['emotional_state']);
    $zodiac_sign = $conn->real_escape_string($_POST['zodiac_sign']);
    $astrology_belief = $conn->real_escape_string($_POST['astrology_belief']);
    $soulmate_belief = $conn->real_escape_string($_POST['soulmate_belief']);
    
    // Ideal partner preferences
    $time_with_partner = $conn->real_escape_string($_POST['time_with_partner']);
    $partner_skin_tone = $conn->real_escape_string($_POST['partner_skin_tone']);
    $partner_age_range = $conn->real_escape_string($_POST['partner_age_range']);
    $partner_hair_color = $conn->real_escape_string($_POST['partner_hair_color']);
    $partner_eye_color = $conn->real_escape_string($_POST['partner_eye_color']);
    $partner_fashion_sense = $conn->real_escape_string($_POST['partner_fashion_sense']);
    $partner_voice_tone = $conn->real_escape_string($_POST['partner_voice_tone']);
    $partner_body_type = $conn->real_escape_string($_POST['partner_body_type']);
    $partner_height_range = $conn->real_escape_string($_POST['partner_height_range']);
    $partner_personality_traits = $conn->real_escape_string($_POST['partner_personality_traits']);
    $partner_intro_extro = $conn->real_escape_string($_POST['partner_intro_extro']);
    $partner_playful_serious = $conn->real_escape_string($_POST['partner_playful_serious']);
    $partner_leader_supportive = $conn->real_escape_string($_POST['partner_leader_supportive']);
    $partner_attractive_features = $conn->real_escape_string($_POST['partner_attractive_features']);
    $partner_lifestyle = $conn->real_escape_string($_POST['partner_lifestyle']);
    $partner_health_fitness = $conn->real_escape_string($_POST['partner_health_fitness']);
    $partner_travel = $conn->real_escape_string($_POST['partner_travel']);
    $partner_sleep_schedule = $conn->real_escape_string($_POST['partner_sleep_schedule']);
    $partner_planning_style = $conn->real_escape_string($_POST['partner_planning_style']);
    $partner_relationship_dynamic = $conn->real_escape_string($_POST['partner_relationship_dynamic']);
    $partner_attachment_style = $conn->real_escape_string($_POST['partner_attachment_style']);
    $partner_communication_frequency = $conn->real_escape_string($_POST['partner_communication_frequency']);
    $partner_emotional_expression = $conn->real_escape_string($_POST['partner_emotional_expression']);
    $partner_conflict_style = $conn->real_escape_string($_POST['partner_conflict_style']);
    $relationship_timeline = $conn->real_escape_string($_POST['relationship_timeline']);
    $long_distance_thoughts = $conn->real_escape_string($_POST['long_distance_thoughts']);
    $relocate_for_love = $conn->real_escape_string($_POST['relocate_for_love']);
    $partner_financial_stability = $conn->real_escape_string($_POST['partner_financial_stability']);
    
    // SQL query to insert data
    $sql = "INSERT INTO love_questionnaire_responses (
        fullname, country, age, height, tone, marital_status, children, occupation, 
        email, phone, whatsapp, social_media, deal_breakers, love_languages, 
        marriage_preference, communication_style, core_values, relationship_perspective, 
        myers_briggs, jungian_types, cognitive_dissonance, love_for_children, 
        desired_children, emotional_state, zodiac_sign, astrology_belief, soulmate_belief,
        time_with_partner, partner_skin_tone, partner_age_range, partner_hair_color,
        partner_eye_color, partner_fashion_sense, partner_voice_tone, partner_body_type,
        partner_height_range, partner_personality_traits, partner_intro_extro,
        partner_playful_serious, partner_leader_supportive, partner_attractive_features,
        partner_lifestyle, partner_health_fitness, partner_travel, partner_sleep_schedule,
        partner_planning_style, partner_relationship_dynamic, partner_attachment_style,
        partner_communication_frequency, partner_emotional_expression, partner_conflict_style,
        relationship_timeline, long_distance_thoughts, relocate_for_love, partner_financial_stability,
        submission_date
    ) VALUES (
        '$fullname', '$country', $age, '$height', '$tone', '$marital_status', $children, '$occupation',
        '$email', '$phone', '$whatsapp', '$social_media', '$deal_breakers', '$love_languages',
        '$marriage_preference', '$communication_style', '$core_values', '$relationship_perspective',
        '$myers_briggs', '$jungian_types', '$cognitive_dissonance', $love_for_children,
        '$desired_children', '$emotional_state', '$zodiac_sign', '$astrology_belief', '$soulmate_belief',
        '$time_with_partner', '$partner_skin_tone', '$partner_age_range', '$partner_hair_color',
        '$partner_eye_color', '$partner_fashion_sense', '$partner_voice_tone', '$partner_body_type',
        '$partner_height_range', '$partner_personality_traits', '$partner_intro_extro',
        '$partner_playful_serious', '$partner_leader_supportive', '$partner_attractive_features',
        '$partner_lifestyle', '$partner_health_fitness', '$partner_travel', '$partner_sleep_schedule',
        '$partner_planning_style', '$partner_relationship_dynamic', '$partner_attachment_style',
        '$partner_communication_frequency', '$partner_emotional_expression', '$partner_conflict_style',
        '$relationship_timeline', '$long_distance_thoughts', '$relocate_for_love', '$partner_financial_stability',
        NOW()
    )";
    
    if ($conn->query($sql) === TRUE) {
        echo "<h2>Thank you for your submission!</h2>";
        echo "<p>Your Details have been successfully recorded.</p>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
} else {
    header("Location: love.html");
    exit();
}
?>